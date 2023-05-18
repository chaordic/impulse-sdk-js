import { categorySubcategoryDataValidation } from "../../../src/events/application/validations/category-subcategory.validation"
import { ParserSchema } from "../../../src/events/common/helpers/objects/parser.schema";
import { mockSubcategoryInput as subcategory } from "../mocks/categorySubcategory";

describe('events', () => {
    test('should validate data subcategoryView', () => {
        const data = new ParserSchema(categorySubcategoryDataValidation).validate(subcategory)
        expect(subcategory.categories).toEqual(data.categories);
    });
})
