import { cartTransactionValidation } from "../../../src/events/application/validations/cart-transaction-validation"
import { ParserSchema } from "../../../src/events/common/helpers/objects/parser.schema";
import { mockCartInput as mockTransactionInput } from "../mocks/cart";

describe('events', () => {
    test('should validate data cartView', () => {
        const data = new ParserSchema(cartTransactionValidation).validate(mockTransactionInput)
        expect(mockTransactionInput.items).toEqual(data.items);
    });
})
