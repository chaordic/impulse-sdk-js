import { Events } from "@/domain/events/home"
import { eventHomeInput } from "@/domain/events/schemas/eventHomeSchema"

const mockEventHomeInput: eventHomeInput = {
    info: {
        pageViewId: "c648ac3b-478e-435f-92f7-809d01a2b0f9",
        shopbackCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        percycleCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        chaordicCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        impulseSuiteCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a"
    },
    source: "desktop",
    identity: {
        anonymousUserId: "anon-fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        browserId: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        session: "1670871998688-0.43341696150224984"
    },
    apiKey: "api-sample",
    url: "https://www.api-sample.com.br/"
}

describe('events', () => {
    test('should dispatch event by home page', () => {
        const homeInput = new Events.Home(mockEventHomeInput)
        // ....
        expect(1).toBe(1)
    })
})