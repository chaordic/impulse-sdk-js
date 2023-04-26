import { EventBuilder } from "@/events/application/ports/builder/event-builder";
import { getRelativeUrl } from "@/events/common/helpers/strings/buildUrl";
import { EventService } from "@/events/common/services/Event";
import { IEvent } from "@/events/application/ports/event/event";
import { defaultDataValidation } from "@/events/application/validations/default-validation";
import { UserInput } from "@/events/application/schemas/user-schema";
import { SourceInput } from "@/events/application/schemas/source-schema";
import { DeviceInput } from "@/events/application/schemas/device-id-schema";
import { UrlInput } from "@/events/application/schemas/url-schema";
import { SalesChannelInput } from "@/events/application/schemas/sales-channel-schema";
import { InfoInput } from "@/events/application/schemas/info-schema";
import { IdentityInput } from "@/events/application/schemas/identity-schema";

type HomeParams = {
    [key: string]: any
}

export class Home extends EventService implements EventBuilder {
    public data: HomeParams = {};
    
    constructor(params: IEvent) {
        super('home', defaultDataValidation, params);
        this.data = {
            apiKey: params.apiKey,
            secretKey: params.secretKey,
            source: params.source
        }
        this.setDefault();
    }

    user(user: UserInput): this {
        this.data.user = user;
        return this
    }

    identity(identity: IdentityInput): this {
        this.data.identity = identity;
        return this
    }

    info(info: InfoInput): this {
        this.data.info = info
        return this
    }

    salesChannel(salesChannel: SalesChannelInput): this {
        this.data.salesChannel = salesChannel;
        return this
    }

    deviceId(deviceId: DeviceInput): this {
        this.data.deviceId = deviceId;
        return this
    }

    source(source: SourceInput): this {
        this.data.source = source;
        return this
    }

    url(url: UrlInput | undefined = getRelativeUrl()): this {
        this.data.url = url;
        return this
    }
}
