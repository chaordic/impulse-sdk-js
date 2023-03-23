import axios, { AxiosResponse } from "axios";
import { ZodError } from "zod";

import { buildRequest } from "@/events/infrastructure/axios/requests/request-generator";
import { BASE_URL, HOME_PATH } from "@/events/common/helpers/strings/constants";
import { DefaultApplicationError } from "@/events/application/errors/default-application-error";
import { defaultDataValidation } from "@/events/application/validations/default-validation";
import { Parser } from "@/events/common/helpers/objects/parser";
import { EventBuilder } from "@/events/application/ports/builder/event-builder";
import { buildRelativeUrl } from "@/events/common/helpers/strings/buildRelativeUrl";
import { DefaultValidationError } from "@/events/application/errors/default-validation-error";

type Params = {
    [key: string]: any
}    
export class Home implements EventBuilder {
    private data: Params = {};
    
    user?<T>(user: Array<T>): this {
        this.data["user"] = user;
        return this
    }
    identity<T>(identity: Array<T>): this {
        this.data["identity"] = identity;
        return this
    }
    info<T>(info: Array<T>): this {
        this.data["info"] = info;
        return this
    }
    salesChannel(salesChannel: string): this {
        this.data["salesChannel"] = salesChannel;
        return this
    }
    deviceId(deviceId: string): this {
        this.data["deviceId"] = deviceId;
        return this
    }
    source(source: string): this {
        this.data["source"] = source;
        return this
    }
    url(url: string): this {
        this.data["url"] = url || buildRelativeUrl();
        return this
    }
}

export async function send(data: any): Promise<any | Error> {
    try {
        const parser = new Parser(defaultDataValidation)        
        const options = await buildRequest({
            baseEndpoint: BASE_URL,
            path: HOME_PATH,
            method: "POST",
            bodyContent: parser.validate(data)
        });
        
        const response: AxiosResponse = await axios.request(options)

        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
            config: response.config
        }
    } catch (err: any) {
        if (err instanceof ZodError) {
            throw new DefaultValidationError(err.message)
        }
        
        const lastKnownError = {
            data: err.response.data,
            status: err.response.status,
            statusText: err.response.statusText,
            config: err.config
        }
        console.info(`Request failed with Exception : ${JSON.stringify(lastKnownError)}\n`)
        throw new DefaultApplicationError(lastKnownError);
    }
}
