import { Cart } from "@/events/application/pages/cart";
import { Home } from "@/events/application/pages/home";
import { SourceInput } from "@/events/application/schemas/source.schema";
import { UserInput } from "@/events/application/schemas/user.schema";
import { ApiKeyInput } from "@/events/application/schemas/api-key.schema";
import { DeviceInput } from "@/events/application/schemas/device-id.schema";
import { SalesChannelInput } from "@/events/application/schemas/sales-channel.schema";
import { UrlInput } from "@/events/application/schemas/url.schema";
import { SecretKeyInput } from "@/events/application/schemas/secret-key.schema";
import { Checkout } from "@/events/application/pages/checkout";
import { Category } from "@/events/application/pages/category";
import { EmptySearch } from "@/events/application/pages/emptySearch";
import { Hotsite } from "@/events/application/pages/hotsite";
import { LandingPage } from "@/events/application/pages/landingPage";
import { NotFound } from "@/events/application/pages/notFound";
import { Other } from "@/events/application/pages/other";
import { Product } from "@/events/application/pages/product";
import { Search } from "@/events/application/pages/search";
import { Subcategory } from "@/events/application/pages/subcategory";
import { Transaction } from "@/events/application/pages/transaction";
import { UserProfile } from "@/events/application/pages/userProfile";

export interface EventHttpConfig {
    /**
     * Represents an abstraction for retrying event operations
     */
    retryPolicy?: 'exponential',
    /**
     * sends an HTTP POST request containing a small amount of data to a web server
     */
    sendAsBeacon?: boolean
}

export interface EventBaseConfig {
    /**
     * identifier apiKey from your store
     */
    apiKey: ApiKeyInput,
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
    /**
     * identifier unique (UUIDv4) for the represented device
     */
    deviceId: DeviceInput
}

export interface EventFrontendConfig extends EventBaseConfig {
    /**
     * identifier type of integration frontend
     */
    type: 'frontend'
    /**
     * identifier domain from your store
     */
    domain?: UrlInput
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
     * View cart constructor
     */
    cart(): Cart {
        return new Cart(this.config)
    }
    /**
     * View category constructor
     */
    category(): Category {
        return new Category(this.config)
    }
    /**
     * View checkout constructor
     */
    checkout(): Checkout {
        return new Checkout(this.config)
    }
    /**
     * View emptySearch constructor
     */
    emptySearch(): EmptySearch {
        return new EmptySearch(this.config)
    }
    /**
     * View home constructor
     */
    home(): Home {
        return new Home(this.config)
    }
    /**
     * View hotsite constructor
     */
    hotsite(): Hotsite {
        return new Hotsite(this.config)
    }
    /**
     * View landingPage constructor
     */
    landingPage(): LandingPage {
        return new LandingPage(this.config)
    }
    /**
     * View notFound constructor
     */
    notFound(): NotFound {
        return new NotFound(this.config)
    }
    /**
     * View other constructor
     */
    other(): Other {
        return new Other(this.config)
    }
    /**
     * View product constructor
     */
    product(): Product {
        return new Product(this.config)
    }
    /**
     * View search constructor
     */
    search(): Search {
        return new Search(this.config)
    }
    /**
     * View subcategory constructor
     */
    subcategory(): Subcategory {
        return new Subcategory(this.config)
    }
    /**
     * View transaction constructor
     */
    transaction(): Transaction {
        return new Transaction(this.config)
    }
    /**
     * View userProfile constructor
     */
    userProfile(): UserProfile {
        return new UserProfile(this.config)
    }
}
