import { categorySubcategoryInputValidation, categorySubcategoryDataValidation } from "../../../src/events/application/validations/category-subcategory-validation"
import { Parser } from "../../../src/events/common/helpers/objects/parser";

let mockCategoryInput: categorySubcategoryInputValidation = {
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
    categories: [
        "BEBÊ DE 0 A 24 MESES"
    ]
}

describe('events', () => {
    test('should validate data categoryView', () => {
        const data = new Parser(categorySubcategoryDataValidation).validate(mockCategoryInput)
        expect(mockCategoryInput.categories).toEqual(data.categories);
    });
})