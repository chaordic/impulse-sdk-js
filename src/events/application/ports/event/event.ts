import { Cart } from "@/events/application/pages/cart";
import { Home } from "@/events/application/pages/home";
export interface IEvent {
    apiKey: string,
    secretKey: string,
    retryPolicy: string,
    sendAsBeacon: boolean,
    source?: string,
    deviceId?: string
}

export class Event {
    config: IEvent

    constructor(config: IEvent){
        this.config = config;
    }

    public home(): Home {
        return new Home(this.config)
    }
    public cart(): Cart {
        return new Cart(this.config)
    }
}
