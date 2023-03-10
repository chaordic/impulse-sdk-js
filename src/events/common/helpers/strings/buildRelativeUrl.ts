import { isBrowser } from "./isBrowser";

export const buildRelativeUrl = (): string | null | boolean => {
    if (!isBrowser()) {
        return false
    }
    return window.location.href || null
}
