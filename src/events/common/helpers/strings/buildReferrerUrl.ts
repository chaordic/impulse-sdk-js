import { isBrowser } from "@/events/common/helpers/strings/isBrowser";

export const buildReferrerUrl = (): string | null | boolean => {
    if (!isBrowser()) {
        return false
    }
    return document.referrer || null
}
