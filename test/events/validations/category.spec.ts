import { categorySubcategoryDataValidation } from "../../../src/events/application/validations/category-subcategory.validation"
import { ParserSchema } from "../../../src/events/common/helpers/objects/parser.schema";
import { mockCategoryInput as category } from "../mocks/categorySubcategory";

describe('events', () => {
    test('should validate data categoryView', () => {
        const data = new ParserSchema(categorySubcategoryDataValidation).validate(category)
        expect(category.categories).toEqual(data.categories);
    });
    test('should validate data categoryView array strings', () => {
        category.categories = [{ id: "123", name: "moveis"}]
        const data = new ParserSchema(categorySubcategoryDataValidation).validate(category)
        expect(category.categories).toEqual(data.categories);
    });
})
