import { ORIGIN_URL } from "@/events/common/helpers/strings/constants";
import { AxiosHeaders } from "axios";
import { RequestParams } from "@/events/infrastructure/axios/requests/request-generator";

export function buildHeaders(params: RequestParams): AxiosHeaders {
    const headers: AxiosHeaders = new AxiosHeaders()
  
    headers.set('Content-Type', 'application/json');
    headers.set('Origin', ORIGIN_URL);
  
    if (params.headerParams) {
      for (const [key, value] of Object.entries(params.headerParams)) {
        if (value) {
          headers.set(key, String(value));
        }
      }
    }
  
    return headers
  }