import { EventConfig } from "@/events/application/ports/event/event";
import { Event } from "@/events/common/services/Event"
import { TransactionOutputValidation, cartTransactionValidation } from "@/events/application/validations/cart-transaction.validation";
import { TransactionId, TransactionItems } from "@/events/application/schemas/cart-transaction.schema";

/**
 * Transaction
 * data that needs to be declared on your store's order transaction view
 */
export class Transaction extends Event<TransactionOutputValidation> {

    constructor(config: EventConfig) {
        super('transaction', cartTransactionValidation, config);
    }
    /**
     * Unique id transaction identifier
     * @param id {string}
     * @returns
     */
    id(id: TransactionId): this {
        this.data.id = id;
        return this
    }    
    /**
     * List of products present in the transaction
     * @param items {Object[]}
     * @returns
     */
    items(items: TransactionItems): this {
        this.data.items = items;
        return this
    }
}
