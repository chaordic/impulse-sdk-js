import { v4 as uuidv4 } from 'uuid';

import { isBrowser } from "@/events/common/helpers/strings/isBrowser";
import { API_KEY } from '@/events/common/helpers/strings/constants';
import { getSystemInfo } from "@/events/common/helpers/strings/systemInfo";
import { buildReferrerUrl } from "@/events/common/helpers/strings/buildReferrerUrl";
import { buildDeviceType } from "@/events/common/helpers/strings/buildDeviceType";
import { setCookie } from "@/events/common/helpers/strings/cookie";

type Params<T> = {
    new (...args: any[]): T;
}

const UUID = uuidv4()

export class EventConstructor {
    pageData: any
    pageName!: string
    
    constructor(EventClass: Params<any>) {
        this.pageData = new EventClass;
        
        (async (): Promise<this> => {
            this.pageName = EventClass.name // return in browser ""
            this.setDefault()
            
            return this;
        })();
    }

    setDefault() {
        this.pageData["default"] = { apiKey: API_KEY }
        this.pageData.default["page"] = this.pageName

        if (isBrowser()) {
            this.pageData.default["info"] = {
                referrer: buildReferrerUrl(),
                pageViewId: setCookie('chaordic_browserId', UUID),
                impulseSuiteCookie: setCookie('chaordic_browserId', UUID)
            }
            this.pageData.default["identity"] = {
                session: setCookie('impulsesuite_session', new Date().getTime() + '-' + Math.random()),
                browserId: setCookie('chaordic_browserId', UUID)
            }
            this.pageData.default["source"] = buildDeviceType(getSystemInfo())
        }
    }
}
