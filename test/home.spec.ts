import { Events, homeInput } from "../src/domain/events/home"

const mockHomeInput: homeInput = {
    apiKey: "api-sample",
    source: "desktop",
    salesChannel: "18",
    user: {
        id: "15078217",
        name: "Teste Linx Impulse",
        email: "teste@linx3.com",
        allowMailMarketing: true
    },
    info: {
        pageViewId: "c648ac3b-478e-435f-92f7-809d01a2b0f9",
        shopbackCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        percycleCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        chaordicCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        impulseSuiteCookie: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a"
    },
    identity: {
        anonymousUserId: "anon-fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        browserId: "fb4e49b6-35e3-42a1-a397-960f0b37ab6a",
        session: "1670871998688-0.43341696150224984"
    },
    url: "https://www.api-sample.com.br/"
}

describe('events', () => {
    test('should dispatch event by home page', async () => {
        const homeInput = new Events.Home(mockHomeInput)
        // ....
        let teste: any = await Events.viewHome(mockHomeInput)

        console.log(teste.status)
        expect(204).toBe(teste.status)
    })

    test('should dispatch event by info or deviceId', () => {
        const homeInput = new Events.Info(mockHomeInput)
        // ....
        console.log(homeInput)
        expect(1).toBe(1)
    })

    test('should dispatch event by make request', async () => {
        let teste: any = await Events.viewHomeRequest(mockHomeInput)

        console.log(teste)
    })
})