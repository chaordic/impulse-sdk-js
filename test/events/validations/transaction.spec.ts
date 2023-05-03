import { cartTransactionValidation } from "../../../src/events/application/validations/cart-transaction-validation"
import { Parser } from "../../../src/events/common/helpers/objects/parser";
import { mockCartInput as mockTransactionInput } from "../mocks/cart";

describe('events', () => {
    test('should validate data cartView', () => {
        const data = new Parser(cartTransactionValidation).validate(mockTransactionInput)
        expect(mockTransactionInput.items).toEqual(data.items);
    });
})
