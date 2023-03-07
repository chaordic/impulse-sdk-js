import { EventConstructor } from "../../src/events/application/event-constructor";
import { Events } from "../../src/events/application/pages/home";

describe('events', () => {
    test('should create default data event Home', () => {

        let homeClass = Events.Home
        let home = new EventConstructor(homeClass);
        
        home.pageData.source('mobile').url()
        expect("mobile").toEqual(home.pageData.data.source);
        expect("buildRelativeUrl").toEqual(home.pageData.data.url);
    });
})