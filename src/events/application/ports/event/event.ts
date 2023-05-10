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
    /**
     * Represents an abstraction for retrying event operations
     */
    retryPolicy?: 'exponential',
    /**
     * sends an HTTP POST request containing a small amount of data to a web server
     */
    sendAsBeacon?: boolean,
}

export interface EventBaseConfig {
    /**
     * identifier apiKey from your store
     */
    apiKey: ApiKeyInput,
    /**
     * identifier unique (UUIDv4) for the represented device
     */
    deviceId: DeviceInput
    /**
     * identifier for the represented source "desktop", "mobile" or "app"
     */
    source: SourceInput,
    /**
     * identifier only for stores using sales channel
     */
    salesChannel?: SalesChannelInput
    /**
     * identifier logged user information
     */
    user?: UserInput
    /**
     * identifier from specific http settings
     */
    http?: EventHttpConfig
}

export interface EventBackendConfig extends EventBaseConfig {
    /**
     * identifier type of integration backend
     */
    type: 'backend'
    /**
     * identifier secretKey from your store 
     */
    secretKey: SecretKeyInput
}

export interface EventFrontendConfig extends EventBaseConfig {
    /**
     * identifier type of integration frontend
     */
    type: 'frontend'
    /**
     * identifier domain from your store
     */
    domain: UrlInput
}

export type EventConfig = EventBackendConfig | EventFrontendConfig

/**
 * EventClient constructor
*/
export class EventClient {
    private config: EventConfig

    constructor(config: EventConfig) {
        this.config = config
    }
    /**
     * View Home constructor
     */
    home(): Home {
        return new Home(this.config)
    }
    /**
     * View Cart constructor
     */
    cart(): Cart {
        return new Cart(this.config)
    }
}
