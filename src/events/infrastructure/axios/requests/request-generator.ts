import { AxiosRequestConfig, AxiosHeaders } from "axios";
import { IMPULSE_SDK_VERSION } from "@/events/common/helpers/strings/version"

export type RequestParamValue = string
  | Date
  | string[]
  | number
  | number[]
  | boolean
  | boolean[]
  | undefined

export type RequestParams = Record<string, RequestParamValue>

export type RequestMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "TRACE"
  | "CONNECT";

export class Request {

  constructor(
    readonly baseEndpoint: string,
    readonly method: RequestMethod,
    readonly bodyContent?: any,
    readonly pathParams?: RequestParamValue,
    readonly headerParams?: any,
    readonly queryParams?: RequestParamValue,
    readonly formParam?: RequestParamValue,
  ) {
    this.baseEndpoint = baseEndpoint
    this.method = method;
    this.bodyContent = bodyContent;
    this.pathParams = pathParams;
    this.headerParams = headerParams;
    this.queryParams = queryParams;
    this.formParam = formParam;
  }

  async build(): Promise<AxiosRequestConfig> {
    const headers: AxiosHeaders = setHeaders(this.headerParams, this.bodyContent.domain);
    const url: string = makeUrl(this.baseEndpoint, this.queryParams);
    let body: any = this.bodyContent;

    if (body === "{}") {
      return {
        method: `${this.method}`,
        headers: headers,
        url
      };
    }

    return {
      method: `${this.method}`,
      headers: headers,
      url,
      data: body
    }
  }
}

function setHeaders(headerParams: RequestParamValue, domain?: string): AxiosHeaders {  
  let defaultHeader = {
    'Content-Type': 'application/json',
    'x-integration-platform': 'sdk',
    'x-integration-type': 'js',
    'x-integration-version': `${IMPULSE_SDK_VERSION}`,
  }

  if (domain) {
    Object.assign(defaultHeader, { 'x-host': `${domain}` });
  }
  
  if (headerParams) {
    const newHeaders = Object.entries(headerParams).reduce((headers: any, entry) => {
      const [key,value] = entry
  
      if (value) {
        headers[key] = value
      }
  
      return headers
    }, defaultHeader)

    return new AxiosHeaders(newHeaders)   
  }

  return new AxiosHeaders(defaultHeader) 
}

function makeUrl(path: string, queryParams: RequestParamValue): string {  
  if (queryParams !== undefined) {
    const queryString: URLSearchParams = new URLSearchParams(`${queryParams}`);
    return `${path}?${queryString}`;
  }

  return path;
}
