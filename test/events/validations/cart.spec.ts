import { cartTransactionValidation } from "../../../src/events/application/validations/cart-transaction-validation"
import { Parser } from "../../../src/events/common/helpers/objects/parser";
import { mockCartInput } from "../mocks/cart";

describe('events', () => {
    test('should validate the cart', () => {
        const data = new Parser(cartTransactionValidation).validate(mockCartInput)
        expect(mockCartInput.items).toEqual(data.items);
    });
})