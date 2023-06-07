import { Event } from "../../src/index";
import { mockCookie } from "./mocks/cookie";
import { parseBrowserCookies, getCookie, setCookie } from "../../src/events/common/helpers/strings/cookie";

const HttpStatusCodeNoContent = 204

describe('events', () => {
    test('should create default data build event Home', () => {
        const event = new Event({
            apiKey: 'api-sample',
            secretKey: 'my-secret-key',
            retryPolicy: 'exponential',
            sendAsBeacon: true
        })
        
        const home = event.home().source('mobile').url('https://teste.com')
        expect("mobile").toEqual(home.data.source);
        expect("https://teste.com").toEqual(home.data.url);
    });
    test('should dispatch event send request homeView', async () => {
        const event = new Event({
            apiKey: 'api-sample',
            secretKey: 'my-secret-key',
            retryPolicy: 'exponential',
            sendAsBeacon: true,
            source: 'app'
        })

        const response = await event.home()
            .user({'id': '123', email: 'teste@linx.com.br'})
            .deviceId('fb4e49b6-35e3-42a1-a397-960f0b37ab6a')
            .source('mobile')
            .url('https://teste.com')
            .send()

        expect(HttpStatusCodeNoContent).toBe(response.status)
    })
    test('should dispatch event send request cartView', async () => {
        const event = new Event({
            apiKey: 'api-sample',
            secretKey: 'my-secret-key',
            retryPolicy: 'exponential',
            sendAsBeacon: true,
            deviceId: 'fb4e49b6-35e3-42a1-a397-960f0b37ab6a'
        })
        const response = await event.cart()
            .user({'id': '123', email: 'teste@linx.com.br'})
            .source('mobile')
            .id('123456')
            .items([
                {
                    pid: "PID_123456",
                    sku: "SKU_123456",
                    quantity: 2
                }
            ])
            .url('https://teste.com')
            .send()

        expect(HttpStatusCodeNoContent).toBe(response.status)
    })
    test('should identity name cookies browser', () => {
        const parseCookie = parseBrowserCookies(mockCookie)
        const cookie = getCookie('legacy_p', parseCookie)
        expect('aaaa6582-d969-4207-8b5b-41562be59669').toBe(cookie)
    })
})
