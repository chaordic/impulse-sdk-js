export function setCookie(name: string, content: string): string {
    const date: Date = new Date();
    const ONE_YEAR: number = 3600 * 1000 * 24 * 365 * 1;
    const domain = window.location.host.replace('www','')

    date.setTime(date.getTime() + (ONE_YEAR));
    const browserCookie = getCookie(name, parseBrowserCookies(document.cookie))

    if (browserCookie) {
        return browserCookie
    }

    document.cookie = `${name}=${content}; Path=/; domain=${domain}; expires=${date.toUTCString()};`;

    return content
}

export function getCookie(name: string, cookie: any): string | undefined {  
    return cookie[name];
}

export function parseBrowserCookies(browserCookies: any): Record<string, string> {
    const cookies = browserCookies ? browserCookies.split(';') : [];
  
    return cookies.reduce((cookiesObj: Object, cookie: string) => {
      return Object.assign(cookiesObj, parseCookieToObject(cookie))
    }, {});
}
  
function parseCookieToObject(cookie: string): object {
    const parts = cookie.split('=');

    return parts.length < 2 ? {} : { [parts[0].trim()]: parts[1].trim() }
}
