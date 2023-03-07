import { API_KEY } from "@/events/common/helpers/strings/constants";
import { getSystemInfo } from "@/events/common/helpers/strings/systemInfo";
import { getDeviceId } from "@/events/common/helpers/strings/device";

type Params<T> = {
    new (...args: any[]): T;
}

export class EventConstructor {
    pageData: any
    pageName: string
    
    constructor(EventClass: Params<any>) {
        this.pageData = new EventClass;
        this.pageName = EventClass.name
        this.setDefault()
    }

    setDefault(): void {
        this.pageData["default"] = { apiKey: API_KEY }
        this.pageData.default["page"] = this.pageName
        this.pageData.default["info"] = {
            pageViewId: null,
            impulseSuiteCookie: null
        }
        this.pageData.default["identity"] = {
            session: null
        }
        this.pageData.default["userAgent"] = getSystemInfo()
        this.pageData.default["deviceId"] = getDeviceId()
    }
}