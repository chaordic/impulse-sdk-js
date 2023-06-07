import { defaultDataValidation } from "../../../src/events/application/validations/default.validation"
import { ParserSchema } from "../../../src/events/common/helpers/objects/parser.schema";
import { mockHomeInput } from "../mocks/home";

describe('events', () => {
    test('should validate data otherView, notFoundView, checkoutView', () => {
        const parser = new ParserSchema(defaultDataValidation)
        expect(parser.validate(mockHomeInput)).toEqual(mockHomeInput);
    });
})
