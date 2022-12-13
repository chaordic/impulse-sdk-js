import { eventHomeInput } from '@/domain/events/schemas/eventHomeSchema'

export namespace Events {
    export class Home {
        home: {};

        constructor(data: eventHomeInput) {
            this.home = data
        }
    }   
}
