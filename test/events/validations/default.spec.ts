import * as Impulse from "../../../src/index"
import { defaultDataValidation } from "../../../src/events/application/validations/default-validation"
import { API_KEY } from "../../../src/events/common/helpers/strings/constants";
import { Parser } from "../../../src/events/common/helpers/objects/parser";

const HttpStatusCodeNoContent = 204

let mockHomeInput = {
    apiKey: "api-sample",
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
    url: "https://www.sephora.com.br/"
}

describe('events', () => {
    test('should validate data otherView, notFoundView, checkoutView', () => {
        const parser = new Parser(defaultDataValidation)
        // console.log(parser.validate(mockHomeInput))        
        // const data = validate(mockHomeInput)
        expect(parser.validate(mockHomeInput)).toEqual(mockHomeInput);
    });
    test('should validate the empty apiKey and set the declared default', () => {
        mockHomeInput.apiKey = ""
        const parser = new Parser(defaultDataValidation).validate(mockHomeInput)
        expect(parser.apiKey).toEqual(API_KEY);
    });
    test('should dispatch event by make request viewHome', async () => {
        try {
            mockHomeInput.apiKey = "sephora-br"
            const response: any = await Impulse.Events.homeView.send(mockHomeInput)
            expect(HttpStatusCodeNoContent).toBe(response.status)
        } catch (err: any) {
            console.log(err)
            expect(err.message).toBe(`Client not found: ${mockHomeInput.apiKey}`);
        }
    })
})