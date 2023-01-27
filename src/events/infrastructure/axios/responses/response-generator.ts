import { AxiosResponse } from "axios";

interface ResponseParams {
  readonly data?: any;
  readonly message: string;
  readonly responseHeaders: any;
  readonly config: any;
  readonly status: any;
  readonly statusText: string;
  readonly method: string;
  readonly endpoint: string;
}

export function buildResponse(params: ResponseParams): AxiosResponse {
  return {
    data: params.data,
    status: params.status,
    statusText: params.statusText,
    headers: params.responseHeaders,
    config: params.config
  }
}