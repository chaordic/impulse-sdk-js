import axios, { AxiosResponse } from "axios";
import { ZodError, ZodType } from "zod";

import { Request } from "@/events/infrastructure/axios/requests/request-generator";
import { BASE_URL } from "@/events/common/helpers/strings/constants";
import { LinxImpulseError } from "@/events/application/errors/linx-impulse-error";
import { ParserSchema } from "@/events/common/helpers/objects/parser.schema";
import { ValidationError } from "@/events/application/errors/validation-error";
import { EventConfig } from "@/events/application/ports/event/event";
import { EventBuilder } from "@/events/application/ports/builder/event-builder";
import { UserInput } from "@/events/application/schemas/user.schema";
import { IdentityInput } from "@/events/application/schemas/identity.schema";
import { InfoInput } from "@/events/application/schemas/info.schema";
import { SalesChannelInput } from "@/events/application/schemas/sales-channel.schema";
import { DeviceInput } from "@/events/application/schemas/device-id.schema";
import { SourceInput } from "@/events/application/schemas/source.schema";
import { UrlInput } from "@/events/application/schemas/url.schema";
import { getReferrer, getRelativeUrl } from "@/events/common/helpers/strings/url";
import { DefaultOutputValidation } from "@/events/application/validations/default.validation";
import { setCookie } from "@/events/common/helpers/strings/cookie";
import { getDeviceType } from "@/events/common/helpers/strings/deviceType";
import { getSystemInfo } from "@/events/common/helpers/strings/systemInfo";
import { getBrowserId } from "@/events/common/helpers/strings/browser";

/**
 * Class Event
 */
export abstract class Event<T extends DefaultOutputValidation = DefaultOutputValidation> implements EventBuilder {
    protected data: Partial<T> = {};
    private readonly config: EventConfig;
    private readonly path: string;
    private readonly schema: ZodType;
    /**
     * Event constructor
     * @param path {string}
     * @param schema {ZodType}
     * @param config {EventConfig}
     */
    constructor(path: string, schema: ZodType, config: EventConfig) {
        this.path = path;
        this.schema = schema;
        this.config = config

        this.data = this.setDefaultBySource()
    }
    /**
     * identifier logged user information 
     * @param user {UserInput}
     * @returns 
     */
    user(user: UserInput): this {
        this.data.user = user;
        return this
    }
    /**
     * identifier unique (UUIDv4) for the represented device
     * @param identity {IdentityInput}
     * @returns 
     */
    identity(identity: IdentityInput): this {
        this.data.identity = identity;
        return this
    }
    /**
     * identifier legacy cookies
     * @param info {InfoInput}
     * @returns 
     */
    info(info: InfoInput): this {
        this.data.info = info
        return this
    }
    /**
     * identifier only for stores using sales channel
     * @param salesChannel {SalesChannelInput}
     * @returns 
     */
    salesChannel(salesChannel: SalesChannelInput): this {
        this.data.salesChannel = salesChannel;
        return this
    }
    /**
     * identifier unique (UUIDv4) for the represented device
     * @param deviceId {DeviceInput}
     * @returns 
     */
    deviceId(deviceId: DeviceInput): this {
        this.data.deviceId = deviceId;
        return this
    }
    /**
     * identifier for the represented source "desktop", "mobile" or "app"
     * @param source {SourceInput}
     * @returns 
     */
    source(source: SourceInput): this {
        this.data.source = source;
        return this
    }
    /**
     * identifier can be used to get the current page address (URL)
     * @param url {UrlInput} 
     * @returns 
     */
    url(url: UrlInput | undefined = getRelativeUrl()): this {
        this.data.url = url;
        return this
    }
    /**
     * send the request events to the server. 
     * @returns {any | Error}
     */
    async send(eventData?: Partial<T>): Promise<any | Error> {      
        try {
            const parser = new ParserSchema(this.schema)
            
            const options = await new Request(
                new URL(`${BASE_URL.href}/${this.path}`),
                'POST',
                parser.validate(this.data || eventData)
            )
            .build();
            
            const response: AxiosResponse = await axios.request(options)
    
            return {
                data: response.data,
                status: response.status,
                statusText: response.statusText,
                config: response.config
            }
        } catch (err: any) {
            if (err instanceof ZodError) {
                throw new ValidationError(err.message)
            }
            
            const lastKnownError = {
                data: err.response.data,
                status: err.response.status,
                statusText: err.response.statusText,
                config: err.config
            }
            console.error(`Request failed with Exception : ${JSON.stringify(lastKnownError)}\n`)
            throw new LinxImpulseError(err.response.data.message);
        }
    }


    private setDefaultBySource(): Partial<T> {
        if (this.config.type === 'frontend') {
            return this.setDefaultFrontend()
        }

        return this.setDefaultBackend()

    }
    
    private setDefaultBackend(): Partial<T> {
        return {
            apiKey: this.config.apiKey,
            deviceId: this.config.deviceId,
            salesChannel: this.config.salesChannel,
            source: this.config.source,
            user: this.config.user
        } as Partial<T>
    }

    private setDefaultFrontend(): Partial<T> {
        const cookie = setCookie('chaordic_browserId', getBrowserId())
        return {
            apiKey: this.config.apiKey,
            salesChannel: this.config.salesChannel,
            source: getDeviceType(getSystemInfo()),
            user: this.config.user,
            info: {
                impulseSuiteCookie: cookie,
                referrer: getReferrer()
            },
            identity: {
                session: setCookie('impulsesuite_session', `${new Date().getTime()}-${Math.random()}`),
                anonymousUserId: setCookie('chaordic_anonymousUserId', `anon-${cookie}`),
                browserId: cookie
            }
        } as Partial<T>
    }
}
