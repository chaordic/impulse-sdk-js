import { Event } from "@/events/common/services/Event";
import { EventConfig } from "@/events/application/ports/event/event";
import { defaultDataValidation } from "@/events/application/validations/default.validation";

/**
 * Hotsite
 * data that needs to be declared on your store's hotsite view
 */
export class Hotsite extends Event {

    constructor(config: EventConfig) {
        super('hotsite', defaultDataValidation, config);
    }
}
