import { Event } from "@/events/common/services/Event";
import { EventConfig } from "@/events/application/ports/event/event";
import { defaultDataValidation } from "@/events/application/validations/default.validation";

/**
 * Userprofile
 * data that needs to be declared on your store's panel logged user page view
 */
export class Userprofile extends Event {

    constructor(config: EventConfig) {
        super('userprofile', defaultDataValidation, config);
    }
}
