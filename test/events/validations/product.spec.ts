import { productDataValidation } from "../../../src/events/application/validations/product.validation"
import { ParserSchema } from "../../../src/events/common/helpers/objects/parser.schema";
import { mockProductInput } from "../mocks/product";

describe('events', () => {
    test('should validate data productView', () => {
        const data = new ParserSchema(productDataValidation).validate(mockProductInput)
        expect(mockProductInput.price).toEqual(data.price);
    });
})
