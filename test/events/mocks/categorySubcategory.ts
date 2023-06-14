import { CategoryInputValidation } from "../../../src/events/application/validations/category-subcategory.validation"

export const mockCategoryInput: CategoryInputValidation = {
    apiKey: "api-sample",
    source: "desktop",
    deviceId: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
    url: "https://www.api-sample.com.br/",
    categories: [{ id: "1", name: "moveis" }, { id: "1", name: "moveis" }],
    searchId: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
    tag: ["asd"]
}

export const mockSubcategoryInput: CategoryInputValidation = {
    apiKey: "api-sample",
    source: "desktop",
    deviceId: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
    url: "https://www.api-sample.com.br/",
    categories: [
        "Impressos",
        "Cartões para Relacionamento",
        "Cartões de Natal"
    ]
}
