import { Cart } from "@/events/application/pages/cart";
import { Home } from "@/events/application/pages/home";
import { SourceInput } from "@/events/application/schemas/source.schema";
import { UserInput } from "@/events/application/schemas/user.schema";

export interface EventHttpConfig {
    retryPolicy?: 'exponential',
    sendAsBeacon?: boolean,
}

export interface EventBaseConfig {
    /**
     * Apikey é pra fazer as requests
     */
    apiKey: string,
    deviceId: string
    source: SourceInput,
    salesChannel?: string
    user?: UserInput
    http?: EventHttpConfig
}

export interface EventBackendConfig extends EventBaseConfig {
    type: 'backend'
    secretKey: string
}

export interface EventFrontendConfig extends EventBaseConfig {
    type: 'frontend'
    domain: string
}

export type EventConfig = EventBackendConfig | EventFrontendConfig

export class EventClient {
    private config: EventConfig

    constructor(config: EventConfig) {
        this.config = config
    }

    home(): Home {
        return new Home(this.config)
    }

    cart(): Cart {
        return new Cart(this.config)
    }
}
