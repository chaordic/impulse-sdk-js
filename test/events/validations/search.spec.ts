import { SearchInputValidation, searchValidation } from "../../../src/events/application/validations/search.validation"
import { ParserSchema } from "../../../src/events/common/helpers/objects/parser.schema";
import { mockSearchInput } from "../mocks/search";

describe('events', () => {
    test('should validate data searchView', () => {
        const data = new ParserSchema(searchValidation).validate(mockSearchInput)
        expect(mockSearchInput.searchId).toEqual(data.searchId);
    });
})
