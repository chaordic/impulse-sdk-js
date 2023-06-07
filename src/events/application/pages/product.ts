import { EventConfig } from "@/events/application/ports/event/event";
import { Event } from "@/events/common/services/Event"
import { ProductOutputValidation, productDataValidation } from "@/events/application/validations/product.validation";
import { ProductId, ProductPrice } from "@/events/application/schemas/product.schema";

/**
 * Product
 * data that needs to be declared on your store's product view
 */
export class Product extends Event<ProductOutputValidation> {

    constructor(config: EventConfig) {
        super('product', productDataValidation, config);
    }   
    /**
     * Identifier product id
     * @param pid {ProductId}
     * @returns
     */
    pid(pid: ProductId): this {
        this.data.pid = pid;
        return this
    }
    /**
     * Identifier product price
     * @param price {ProductPrice}
     * @returns
     */
    price(price: ProductPrice): this {
        this.data.price = price;
        return this
    }
}
