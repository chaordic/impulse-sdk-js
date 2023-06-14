import { EventClient } from "../../src/index";
import { mockCookie } from "./mocks/cookie";
import { parseBrowserCookies, getCookie, setCookie } from "../../src/events/common/helpers/strings/cookie";

const HTTP_STATUS_CODE_NO_CONTENT = 204

describe('events', () => {
    test('should create default data build event Home', async () => {
        const event = new EventClient({
            apiKey: "my-apiKey",
            secretKey: "lSJfQ==",
            source: "mobile",
            type: "backend"
        })
       
        const res = await event.home()
            .url('https://test.com.br')
            .deviceId('fb4e49b6-35e3-42a1-a397-960f0b37ab6a')
            .send()

        expect(res.status).toEqual(HTTP_STATUS_CODE_NO_CONTENT);
    });
    test('should dispatch event build request cartView', async () => {
        const event = new EventClient({
            apiKey: "my-apiKey",
            secretKey: "lSJfQ==",
            source: "mobile",
            type: "backend"
        })

        const res = await event.cart()
            .user({'id': '123', email: 'test@linx.com.br'})
            .source('mobile')
            .deviceId('fb4e49b6-35e3-42a1-a397-960f0b37ab6a')
            .id('123456')
            .items([
                {
                    pid: "PID_123456",
                    sku: "SKU_123456",
                    quantity: 2
                }
            ])
            .url('https://test.com.br')
            .send()

        expect(res.status).toBe(HTTP_STATUS_CODE_NO_CONTENT)
    })
    test('should identity name cookies browser', () => {
        const parseCookie = parseBrowserCookies(mockCookie)
        const cookie = getCookie('legacy_p', parseCookie)
        expect('aaaa6582-d969-4207-8b5b-41562be59669').toBe(cookie)
    })
})
