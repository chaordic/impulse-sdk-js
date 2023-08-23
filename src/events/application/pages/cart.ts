import { EventConfig } from "@/events/application/ports/event/event";
import { Event } from "@/events/common/services/Event"
import { CartOutputValidation, cartValidation } from "@/events/application/validations/cart-transaction.validation";
import { CartId, CartItems } from "@/events/application/schemas/cart.schema";

/**
 * Cart
 * data that needs to be declared on your store's cart view
 */
export class Cart extends Event<CartOutputValidation> {

    constructor(config: EventConfig) {
        super('cart', cartValidation, config);
    }
    /**
     * Unique cart identifier
     * @param id {string}
     * @returns
     */
    id(id: CartId): this {
        this.data.id = id;
        return this
    }    
    /**
     * List of products present in the cart
     * @param items {Object[]}
     * @returns
     */
    items(items: CartItems): this {
        this.data.items = items;
        return this
    }
}
