import { isBrowser } from "@/events/common/helpers/strings/isBrowser";

export function getSystemInfo(): string {
    if (isBrowser()) 
        return window.navigator.userAgent

    const nodeVersion = process?.version.slice(1) || '18'
    return `node.js/${nodeVersion}`
}