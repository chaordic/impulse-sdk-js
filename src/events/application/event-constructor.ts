import { API_KEY } from '@/events/common/helpers/strings/constants';
import { getSystemInfo } from "@/events/common/helpers/strings/systemInfo";
import { setCookie } from "@/events/common/helpers/strings/cookie";
import { v4 as uuidv4 } from 'uuid';

type Params<T> = {
    new (...args: any[]): T;
}

export class EventConstructor {
    pageData: any
    pageName!: string
    
    constructor(EventClass: Params<any>) {
        this.pageData = new EventClass;
        
        (async (): Promise<this> => {
            this.pageName = EventClass.name
            this.setDefault()
            
            return this;
        })();
    }

    setDefault() {
        this.pageData["default"] = { apiKey: API_KEY }
        this.pageData.default["page"] = this.pageName
        this.pageData.default["info"] = {
            pageViewId: null,
            impulseSuiteCookie: null
        }
        this.pageData.default["identity"] = {
            session: setCookie('linx_session', uuidv4())
        }
        this.pageData.default["userAgent"] = getSystemInfo()
    }
}
