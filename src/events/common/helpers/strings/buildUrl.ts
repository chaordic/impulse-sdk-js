import { isBrowser } from "@/events/common/helpers/strings/isBrowser";

export const getReferrer = (): string | undefined=> {
    return buildUrl(document.referrer)
}

export const getRelativeUrl = (): string | undefined=> {
    return buildUrl(window.location.href) 
}

function buildUrl(url: string): string | undefined {
    if (isBrowser()) {
      return url
    }
}
  