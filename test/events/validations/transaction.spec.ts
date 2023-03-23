import { CartTransactionInput, cartTransactionValidation } from "../../../src/events/application/validations/cart-transaction-validation"
import { Parser } from "../../../src/events/common/helpers/objects/parser";

let mockTransactionInput = {
    apiKey: "api-sample",
    source: "desktop",
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
            price: "20.49",
            quantity: "2"
        },
        {
            pid: "PID_456",
            price: "120.49",
            quantity: "1"
        }
    ]
}

describe('events', () => {
    test('should validate data cartView', () => {
        const data = new Parser(cartTransactionValidation).validate(mockTransactionInput)
        expect(mockTransactionInput.items).toEqual(data.items);
    });
})