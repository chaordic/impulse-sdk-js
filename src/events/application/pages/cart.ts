import { EventBuilder } from "@/events/application/ports/builder/event-builder";
import { getRelativeUrl } from "@/events/common/helpers/strings/buildUrl";
import { EventService } from "@/events/common/services/Event";
import { IEvent } from "@/events/application/ports/event/event";
import { cartTransactionValidation } from "@/events/application/validations/cart-transaction-validation";
import { DeviceInput } from "@/events/application/schemas/device-id-schema";
import { IdentityInput } from "@/events/application/schemas/identity-schema";
import { InfoInput } from "@/events/application/schemas/info-schema";
import { SalesChannelInput } from "@/events/application/schemas/sales-channel-schema";
import { SourceInput } from "@/events/application/schemas/source-schema";
import { UrlInput } from "@/events/application/schemas/url-schema";
import { UserInput } from "@/events/application/schemas/user-schema";

type CartParams = {
    [key: string]: any
}

export class Cart extends EventService implements EventBuilder {
    public data: CartParams = {};

    constructor(eventParams: IEvent) {
        super('cart', cartTransactionValidation, eventParams);
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

    id(id: string): this {
        this.data.id = id;
        return this
    }
    items(items: object): this {
        this.data.items = items;
        return this
    }
}
