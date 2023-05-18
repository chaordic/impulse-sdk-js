import { Event } from "@/events/common/services/Event";
import { EventConfig } from "@/events/application/ports/event/event";
import { defaultDataValidation } from "@/events/application/validations/default.validation";

/**
 * Home
 * data that needs to be declared on your store's home view
 */
export class Home extends Event {

    constructor(config: EventConfig) {
        super('home', defaultDataValidation, config);
    }
}
