import { Cart } from "@/events/application/pages/cart";
import { Home } from "@/events/application/pages/home";
import { SourceInput } from "@/events/application/schemas/source.schema";
import { UserInput } from "@/events/application/schemas/user.schema";
import { ApiKeyInput } from "@/events/application/schemas/api-key.schema";
import { DeviceInput } from "@/events/application/schemas/device-id.schema";
import { SalesChannelInput } from "@/events/application/schemas/sales-channel.schema";
import { UrlInput } from "@/events/application/schemas/url.schema";
import { SecretKeyInput } from "@/events/application/schemas/secret-key.schema";

export interface EventHttpConfig {
    retryPolicy?: 'exponential',
    sendAsBeacon?: boolean,
}

export interface EventBaseConfig {
    /**
     * Apikey é pra fazer as requests
     */
    apiKey: ApiKeyInput,
    deviceId: DeviceInput
    source: SourceInput,
    salesChannel?: SalesChannelInput
    user?: UserInput
    http?: EventHttpConfig
}

export interface EventBackendConfig extends EventBaseConfig {
    type: 'backend'
    secretKey: SecretKeyInput
}

export interface EventFrontendConfig extends EventBaseConfig {
    type: 'frontend'
    domain: UrlInput
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
