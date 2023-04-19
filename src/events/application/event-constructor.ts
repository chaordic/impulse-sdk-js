import { v4 as uuidv4 } from 'uuid';

import { isBrowser } from "@/events/common/helpers/strings/isBrowser";
import { API_KEY } from '@/events/common/helpers/strings/constants';
import { getSystemInfo } from "@/events/common/helpers/strings/systemInfo";
import { getReferrer } from "@/events/common/helpers/strings/buildUrl";
import { buildDeviceType } from "@/events/common/helpers/strings/buildDeviceType";
import { setCookie } from "@/events/common/helpers/strings/cookie";

type Params<T> = {
    new (...args: any[]): T;
}

const UUID = uuidv4()

export interface IEvent {
    apiKey: string,
    secretKey: string,
    retryPolicy: string,
    sendAsBeacon: boolean,
    source: string
}

export class EventConstructor {
    pageData: {[key: string]: any}
    pageName!: string | null
    
    constructor(EventClass: Params<any>) {
        this.pageData = new EventClass;
        
        (async (): Promise<this> => {
            this.pageName = EventClass.name || null // return in browser ""
            this.setDefault()
            
            return this;
        })();
    }

    setDefault() {
        this.pageData.default = {
            apiKey: API_KEY,
            page: this.pageName
        }

        if (isBrowser()) {
            const definitions = {
                info: {
                    referrer: getReferrer(),
                    pageViewId: setCookie('chaordic_browserId', UUID),
                    impulseSuiteCookie: setCookie('chaordic_browserId', UUID)
                },
                identity: {
                    session: setCookie('impulsesuite_session', new Date().getTime() + '-' + Math.random()),
                    browserId: setCookie('chaordic_browserId', UUID)
                },
                source: buildDeviceType(getSystemInfo())
            }

            Object.assign(this.pageData.default, definitions)
        }
    }
}
