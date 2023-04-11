import { SearchInputValidation, searchValidation } from "../../../src/events/application/validations/search-validation"
import { Parser } from "../../../src/events/common/helpers/objects/parser";

let mockSearchInput: SearchInputValidation = {
    apiKey: "api-sample",
    source: "desktop",
    info: {
        pageViewId: "c648ac3b-478e-435f-92f7-809d01a2b0f9",
        chaordicCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        referrer: "https://www.api-sample.com.br/",
        impulseSuiteCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a"
    },
    identity: {
        anonymousUserId: "anon-fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        browserId: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        session: "1670871998688-0.43341696150224984"
    },
    url: "https://www.api-sample.com.br/",
    query: "phone",
    searchId: "48ebc957-b53d-4d61-b71a-dfa151322d8c",
    items: [
        {
            pid: "PID_123456",
        },
        {
            pid: "PID_456",
        }
    ]
}

describe('events', () => {
    test('should validate data searchView', () => {
        const data = new Parser(searchValidation).validate(mockSearchInput)
        expect(mockSearchInput.searchId).toEqual(data.searchId);
    });
})
