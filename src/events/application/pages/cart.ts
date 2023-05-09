import { EventConfig } from "@/events/application/ports/event/event";
import { Event } from "@/events/common/services/Event"
import { CartTransactionOutput, cartTransactionValidation } from "@/events/application/validations/cart-transaction-validation";
import { CartId, CartItems } from "@/events/application/schemas/cart-transaction.schema";

export class Cart extends Event<CartTransactionOutput> {

    constructor(config: EventConfig) {
        super('cart', cartTransactionValidation, config);
    }

    id(id: CartId): this {
        this.data.id = id;
        return this
    }
    
    items(items: CartItems): this {
        this.data.items = items;
        return this
    }
}
