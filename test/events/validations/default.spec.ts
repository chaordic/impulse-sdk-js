import { defaultDataValidation } from "../../../src/events/application/validations/default-validation"
import { Parser } from "../../../src/events/common/helpers/objects/parser";
import { mockHomeInput } from "../mocks/home";

describe('events', () => {
    test('should validate data otherView, notFoundView, checkoutView', () => {
        const parser = new Parser(defaultDataValidation)
        expect(parser.validate(mockHomeInput)).toEqual(mockHomeInput);
    });
})
