import * as Impulse from "../../../src/index"
import { defaultDataValidation } from "../../../src/events/application/validations/default-validation"
import { API_KEY } from "../../../src/events/common/helpers/strings/constants";
import { Parser } from "../../../src/events/common/helpers/objects/parser";
import { mockHomeInput } from "../mocks/home";

const HttpStatusCodeNoContent = 204

describe('events', () => {
    test('should validate data otherView, notFoundView, checkoutView', () => {
        const parser = new Parser(defaultDataValidation)
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