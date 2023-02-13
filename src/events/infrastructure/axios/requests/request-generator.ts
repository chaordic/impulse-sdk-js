import { formatDateToRFC3339 } from "@/events/common/helpers/date/formatDateToRFC3339";
import { buildHeaders } from "@/events/infrastructure/axios/headers/headers-generator";
import { AxiosRequestConfig, AxiosHeaders } from "axios";

export interface Params {
  [key: string]:
    | string
    | Date
    | string[]
    | number
    | number[]
    | boolean
    | boolean[]
    | undefined;
}

export type Method =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "TRACE"
  | "CONNECT";

export interface RequestParams {
  readonly baseEndpoint: string;
  readonly path: string;
  readonly method: Method;
  readonly bodyContent?: any;
  readonly pathParams?: Params;
  readonly headerParams?: Params;
  readonly queryParams?: Params;
  readonly formParam?: Params;
}

export async function buildRequest(params: RequestParams): Promise<AxiosRequestConfig> {
  const headers: AxiosHeaders = buildHeaders(params);
  const url: string = computeUri(params);
  let body: any = params.bodyContent;

  if (body === "{}") {
    return {
      method: params.method,
      headers: headers,
      url: url
    };
  } 

  return {
    method: params.method,
    headers: headers,
    url: url,
    data: body
  }
}

function computeUri(params: RequestParams): string {
  const path: string = validateAndComputePath(params.path, params.pathParams);
  const queryString: string = stringify(params.queryParams);
  let uri: string = params.baseEndpoint + path;
  if (queryString) {
    uri = uri + "?" + queryString;
  }
  return uri;
}

function validateAndComputePath(path: string, pathParams?: Params): string {
  if (pathParams) {
    for (const [key, value] of Object.entries(pathParams)) {
      if (value || value === false || value === 0) {
        path = path.replace(key, encodeURIComponent(String(value)));
      } else {
        throw new Error(`Missing required path parameter for ${key}`);
      }
    }
  }
  return path;
}

function stringify(queryParams?: Params): string {
  let qs = "";
  if (queryParams) {
    qs = Object.keys(queryParams)
      .map(function(key) {
        let value = queryParams[key];
        if (Array.isArray(value)) {
          let formatter = encoderforArrayFormat();
          return (value as Array<any>).reduce(formatter(key), []).join("&");
        }

        if (Object.prototype.toString.call(value) === "[object Date]" && value instanceof Date) {
          return key + "=" + formatDateToRFC3339(value);
        } else if (value || value === false || value === 0) {
          return key + "=" + value;
        }
      })
      .filter(key => key !== undefined && key !== null)
      .join("&");
  }
  return qs;
}

function encoderforArrayFormat() {
  return (key: any) => (result: any, value: any) => {
    if (value === undefined || value === null || value === "") {
      return result;
    }

    return [...result, [key, "=", value].join("")];
  };
}
