import { Event } from "@/events/common/services/Event";
import { EventConfig } from "@/events/application/ports/event/event";
import { defaultDataValidation } from "@/events/application/validations/default-validation";

/**
 * Checkout
 * data that needs to be declared on your store's checkout view
 */
export class Checkout extends Event {

    constructor(config: EventConfig) {
        super('checkout', defaultDataValidation, config);
    }
}
