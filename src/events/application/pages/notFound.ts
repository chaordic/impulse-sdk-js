import { Event } from "@/events/common/services/Event";
import { EventConfig } from "@/events/application/ports/event/event";
import { defaultDataValidation } from "@/events/application/validations/default.validation";

/**
 * NotFound
 * data that needs to be declared on your store's not found view
 */
export class NotFound extends Event {

    constructor(config: EventConfig) {
        super('not_found', defaultDataValidation, config);
    }
}
