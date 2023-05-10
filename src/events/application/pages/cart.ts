import { EventConfig } from "@/events/application/ports/event/event";
import { Event } from "@/events/common/services/Event"
import { CartTransactionOutput, cartTransactionValidation } from "@/events/application/validations/cart-transaction-validation";
import { CartId, CartItems } from "@/events/application/schemas/cart-transaction.schema";

/**
 * Cart
 * data that needs to be declared on your store's cart view
 */
export class Cart extends Event<CartTransactionOutput> {

    constructor(config: EventConfig) {
        super('cart', cartTransactionValidation, config);
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
