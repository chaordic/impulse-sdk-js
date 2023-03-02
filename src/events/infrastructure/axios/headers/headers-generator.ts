import { ORIGIN_URL } from "@/events/common/helpers/strings/constants";
import { AxiosHeaders } from "axios";
import { RequestParams } from "@/events/infrastructure/axios/requests/request-generator";
import { detectDevice } from "@/events/common/helpers/strings/detectDevice";                

export function buildHeaders(params: RequestParams): AxiosHeaders {
    const headers: AxiosHeaders = new AxiosHeaders()
    const headerDevice: any = params.headerParams;
    const deviceType: any = detectDevice(headerDevice)    
    headers.set('Content-Type', 'application/json');
    headers.set('Origin', ORIGIN_URL);
    headers.set('x-device-type', deviceType);
 
    if (params.headerParams) {
      for (const [key, value] of Object.entries(params.headerParams)) {
        if (value) {
          headers.set(key, String(value));
        }
      }
    }    
  
    return headers
  }