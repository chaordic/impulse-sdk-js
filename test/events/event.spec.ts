import * as linx from "../../src/index";

import { EventConstructor } from "../../src/events/application/event-constructor";
import { Home } from "../../src/events/application/pages/home";
import { mockCookie } from "./mocks/cookie";
import { parseBrowserCookies, getCookie, setCookie } from "../../src/events/common/helpers/strings/cookie";
import { mockHomeInput } from "./mocks/home";
import { mockCartInput } from "./mocks/cart";

const HttpStatusCodeNoContent = 204

describe('events', () => {
    test('should create default data build event Home', () => {
        const home = new EventConstructor(Home);
        
        home.pageData.source('mobile').url('buildRelativeUrl')
        console.log(home.pageData)
        expect("mobile").toEqual(home.pageData.data.source);
        expect("buildRelativeUrl").toEqual(home.pageData.data.url);
    });
    test('should dispatch event send request homeView', async () => {
        const response = await linx.impulse.events.homeView(mockHomeInput)
        expect(HttpStatusCodeNoContent).toBe(response.status)
    })
    test('should dispatch event send request cartView', async () => {
        const response = await linx.impulse.events.cartView(mockCartInput)
        expect(HttpStatusCodeNoContent).toBe(response.status)
    })
    test('should identity name cookies browser', () => {
        const parseCookie = parseBrowserCookies(mockCookie)
        const cookie = getCookie('legacy_p', parseCookie)
        expect('aaaa6582-d969-4207-8b5b-41562be59669').toBe(cookie)
    })
    test('should set cookie if browser otherwise receive a null', () => {
        const cookie = setCookie('linx_session', "linx_session-cookie")
        expect(null).toBe(cookie)
    })
})
