import { isBrowser } from "@/events/common/helpers/strings/isBrowser";

export function setCookie(name: string, content: string): string | null {
    const date = new Date();

    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000)); //+1 day (= 1 year)

    if (isBrowser()) {
        const browserCookie = getCookie(name, parseBrowserCookies(document.cookie))

        if (browserCookie) {
            return browserCookie
        }
        document.cookie = name + "=" + content + ";expires=" + date.toUTCString() + ";SameSite=None" + ";path=/";
        return content
    }
    return null
}

export function getCookie(name: string, cookie: any): string {  
    return cookie[name] || null;
}
  
export function parseBrowserCookies(browserCookies: any): string[] {
    const cookies = browserCookies ? browserCookies.split(';') : [];

    return cookies
        .map(getKeyValue)
        .filter((cookies: any) => cookies.key)
        .reduce((acc: Array<string>, cookie: any) => {
            acc[cookie.key] = cookie.value;

            return acc;
        }, {});
}

function getKeyValue(text: string): object {
    const parts = text.split('=');

    if (parts.length < 2) {
        return {};
    }

    return {
        key: parts[0].trim(),
        value: parts[1].trim()
    };
}
  