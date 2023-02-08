import { ProductInputValidation, ProductOutputValidation, validate } from "../../../src/events/application/validations/product-validation"

let mockCategoryInput: ProductInputValidation | ProductOutputValidation = {
    apiKey: "api-sample",
    source: "desktop",
    info: {
        pageViewId: "c648ac3b-478e-435f-92f7-809d01a2b0f9",
        chaordicCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        referrer: "https://www.api-sample.com.br/",
        impulseSuiteCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a"
    },
    identity: {
        anonymousUserId: "anon-fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        browserId: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        session: "1670871998688-0.43341696150224984"
    },
    url: "https://www.api-sample.com.br/",
    pid: "4426370",
    price: "5.59",
}

describe('events', () => {
    test('should validate data productView', () => {
        const data = validate(mockCategoryInput)
        expect(Number(mockCategoryInput.price)).toEqual(data.price);
    });
})