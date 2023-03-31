import { categorySubcategoryDataValidation } from "../../../src/events/application/validations/category-subcategory-validation"
import { Parser } from "../../../src/events/common/helpers/objects/parser";
import { mockSubcategoryInput as subcategory } from "../mocks/categorySubcategory";

describe('events', () => {
    test('should validate data subcategoryView', () => {
        const data = new Parser(categorySubcategoryDataValidation).validate(subcategory)
        expect(subcategory.categories).toEqual(data.categories);
    });
})