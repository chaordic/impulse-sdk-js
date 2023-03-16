import { isBrowser } from "@/events/common/helpers/strings/isBrowser";

export const buildRelativeUrl = (): string | null | boolean => {
    if (!isBrowser()) {
        return false
    }
    return window.location.href || null
}
