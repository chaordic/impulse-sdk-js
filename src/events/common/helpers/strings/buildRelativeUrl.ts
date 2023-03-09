import { isBrowser } from "./isBrowser";

export const buildRelativeUrl = (): string | boolean => {
    if (!isBrowser()) {
        return false
    }
    return window.location.href
}
