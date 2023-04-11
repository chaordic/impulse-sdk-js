import { categorySubcategoryDataValidation } from "../../../src/events/application/validations/category-subcategory-validation"
import { Parser } from "../../../src/events/common/helpers/objects/parser";
import { mockCategoryInput as category } from "../mocks/categorySubcategory";

describe('events', () => {
    test('should validate data categoryView', () => {
        const data = new Parser(categorySubcategoryDataValidation).validate(category)
        expect(category.categories).toEqual(data.categories);
    });
    test('should validate data categoryView array strings', () => {
        category.categories = ["moveis", "mdf"]
        const data = new Parser(categorySubcategoryDataValidation).validate(category)
        expect(category.categories).toEqual(data.categories);
    });
})
