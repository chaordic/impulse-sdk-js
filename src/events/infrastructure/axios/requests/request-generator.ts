import { AxiosRequestConfig, AxiosHeaders } from "axios";

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
    readonly baseEndpoint: URL,
    readonly method: RequestMethod,
    readonly bodyContent?: any,
    readonly pathParams?: RequestParamValue,
    readonly headerParams?: RequestParamValue,
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
    const headers: AxiosHeaders = setHeaders(this.headerParams);
    const url: URL = makeUrl(this.baseEndpoint, this.queryParams);
    let body: any = this.bodyContent;

    if (body === "{}") {
      return {
        method: `${this.method}`,
        headers: headers,
        url: url.href
      };
    }

    return {
      method: `${this.method}`,
      headers: headers,
      url: url.href,
      data: body
    }
  }
}

function setHeaders(headerParams: RequestParamValue): AxiosHeaders {
  const headers = {
    'Content-Type':'application/json'
  }

  if (headerParams) {
    for (const [key, value] of Object.entries(headerParams)) {
      if (value) {
        Object.assign(headers, {key, value});
      }
    }
  }

  return new AxiosHeaders(headers)
}

function makeUrl(path: URL, queryParams: RequestParamValue): URL {  
  if (queryParams !== undefined) {
    const queryString: URLSearchParams = new URLSearchParams(`${queryParams}`);
    return new URL(`${path.href}?${queryString}`);
  }

  return path;
}
