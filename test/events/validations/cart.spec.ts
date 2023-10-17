import { cartValidation } from "../../../src/events/application/validations/cart-transaction.validation"
import { ParserSchema } from "../../../src/events/common/helpers/objects/parser.schema";
import { mockCartInput } from "../mocks/cart";

describe('events', () => {
    test('should validate the cart', () => {
        const data = new ParserSchema(cartValidation).validate(mockCartInput)
        expect(mockCartInput.items).toEqual(data.items);
    });
})
