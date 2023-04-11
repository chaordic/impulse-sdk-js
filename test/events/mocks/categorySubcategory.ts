import { categorySubcategoryInputValidation } from "../../../src/events/application/validations/category-subcategory-validation"

export const mockCategoryInput: categorySubcategoryInputValidation = {
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
    categories: [{ id: "1", name: "moveis" }, { id: "1", name: "moveis" }]
}

export const mockSubcategoryInput: categorySubcategoryInputValidation = {
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
        "Impressos",
        "Cartões para Relacionamento",
        "Cartões de Natal"
    ]
}
