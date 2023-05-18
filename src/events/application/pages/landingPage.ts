import { Event } from "@/events/common/services/Event";
import { EventConfig } from "@/events/application/ports/event/event";
import { defaultDataValidation } from "@/events/application/validations/default-validation";

/**
 * landingPage
 * data that needs to be declared on your store's landing page view
 */
export class LandingPage extends Event {

    constructor(config: EventConfig) {
        super('landing_page', defaultDataValidation, config);
    }
}
