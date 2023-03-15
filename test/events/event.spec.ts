import { EventConstructor } from "../../src/events/application/event-constructor";
import { DefaultInputValidation } from "../../src/events/application/validations/default-validation";
import { Home } from "../../src/events/application/pages/home";
import * as Impulse from "../../src/index";

const HttpStatusCodeNoContent = 204

let mockHomeInput: DefaultInputValidation = {
    apiKey: "sephora-br",
    source: "desktop",
    salesChannel: "18",
    user: {
        id: "15078217",
        name: "Guilherme",
        email: "gui@linx.com",
        allowMailMarketing: true
    },
    info: {
        pageViewId: "c648ac3b-478e-435f-92f7-809d01a2b0f9",
        shopbackCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        percycleCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        chaordicCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        impulseSuiteCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a"
    },
    identity: {
        anonymousUserId: "anon-fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        browserId: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        session: "1670871998688-0.43341696150224984"
    },
    url: "https://www.sephora.com.br/"
}

let mockCartInput = {
    apiKey: "sephora-br",
    source: "desktop",
    salesChannel: "18",
    user: {
        id: "15078217",
        name: "Teste Linx Impulse",
        email: "teste@linx3.com",
        allowMailMarketing: true
    },
    info: {
        pageViewId: "c648ac3b-478e-435f-92f7-809d01a2b0f9",
        shopbackCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        percycleCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        chaordicCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        impulseSuiteCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a"
    },
    identity: {
        anonymousUserId: "anon-fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        browserId: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        session: "1670871998688-0.43341696150224984"
    },
    url: "https://www.api-sample.com.br/",
    id: "123456",
    items: [
        {
            pid: "PID_123456",
            sku: "SKU_123456",
            quantity: "2"
        },
        {
            pid: "PID_456",
            sku: "SKU_456",
            quantity: "1"
        }
    ]
}

describe('events', () => {
    test('should create default data build event Home', () => {
        const home = new EventConstructor(Home);
        
        home.pageData.source('mobile').url('buildRelativeUrl')
        expect("mobile").toEqual(home.pageData.data.source);
        expect("buildRelativeUrl").toEqual(home.pageData.data.url);
    });
    test('should dispatch event send request homeView', async () => {
        const response = await Impulse.Events.homeView.send(mockHomeInput)
        expect(HttpStatusCodeNoContent).toBe(response.status)
    })
    test('should dispatch event send request cartView', async () => {
        const response = await Impulse.Events.cartView.send(mockCartInput)
        expect(HttpStatusCodeNoContent).toBe(response.status)
    })
})
