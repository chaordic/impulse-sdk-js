import { ORIGIN_URL } from "@/events/common/helpers/strings/constants";
import { AxiosHeaders } from "axios";
import { RequestParams } from "@/events/infrastructure/axios/requests/request-generator";
import { Navigator } from 'node-navigator';
const navigator = new Navigator();

export function buildHeaders(params: RequestParams): AxiosHeaders {
    const headers: AxiosHeaders = new AxiosHeaders()         
    const devices: Record<string, any> = { 
      app: navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),
      mobile: navigator.userAgent.match(/Chrome|Firefox|Safari|Opera|Edge/i),
      desktop: navigator.platform.match(/darwin|win32|linux|freebsd|sunos|openbsd|aix/i)
    }
    const device = Object.keys(devices).find(device => devices[device]) || 'unknown';

    
    headers.set('Content-Type', 'application/json');
    headers.set('Origin', ORIGIN_URL);
    headers.set('x-device-type', device);
  
    if (params.headerParams) {
      for (const [key, value] of Object.entries(params.headerParams)) {
        if (value) {
          headers.set(key, String(value));
        }
      }
    }
  
    return headers
  }

  

  // Exemplo NodeJS detectar dispositivo mobile ou desktop