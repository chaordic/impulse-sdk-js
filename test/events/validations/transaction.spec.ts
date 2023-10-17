import { transactionValidation } from "../../../src/events/application/validations/cart-transaction.validation"
import { ParserSchema } from "../../../src/events/common/helpers/objects/parser.schema";
import { mockCartInput as mockTransactionInput } from "../mocks/cart";

describe('events', () => {
    test('should validate data cartView', () => {
        const data = new ParserSchema(transactionValidation).validate(mockTransactionInput)
        expect(mockTransactionInput.items).toEqual(data.items);
    });
})
