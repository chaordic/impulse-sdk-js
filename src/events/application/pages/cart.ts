import { EventBuilder } from "@/events/application/ports/builder/event-builder";
import { getRelativeUrl } from "@/events/common/helpers/strings/buildUrl";
import { EventService } from "@/events/common/services/Event";
import { IEvent } from "@/events/application/ports/event/event";
import { cartTransactionValidation } from "@/events/application/validations/cart-transaction-validation";

type CartParams = {
    [key: string]: any
}

export class Cart extends EventService implements EventBuilder {
    public data: CartParams = {};
    
    constructor(params: IEvent) {
        super('cart', cartTransactionValidation);        
        this.data = {
            apiKey: params.apiKey,
            secretKey: params.secretKey,
            source: params.source
        }
        this.setDefault();
    }

    user(user: object): this {
        this.data.user = user;
        return this
    }

    identity(identity: object): this {
        this.data.identity = identity;
        return this
    }

    info(info: object): this {
        this.data.info = info
        return this
    }

    salesChannel(salesChannel: string): this {
        this.data.salesChannel = salesChannel;
        return this
    }

    deviceId(deviceId: string): this {
        this.data.deviceId = deviceId;
        return this
    }

    source(source: string): this {
        this.data.source = source;
        return this
    }

    url(url: string | undefined = getRelativeUrl()): this {
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
