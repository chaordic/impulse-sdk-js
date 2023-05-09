import { Event } from "@/events/common/services/Event";
import { EventConfig } from "@/events/application/ports/event/event";
import { DefaultOutputValidation, defaultDataValidation } from "@/events/application/validations/default-validation";

export class Home extends Event<DefaultOutputValidation> {

    constructor(config: EventConfig) {
        super('home', defaultDataValidation, config);
    }
}
