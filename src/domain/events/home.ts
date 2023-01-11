import axios, { AxiosResponse } from "axios";

import { buildRequest } from "@/infrastructure/request-generator";
import { BASE_URL, HOME_PATH } from "@/domain/helpers/constants";
import { SdkError } from "@/domain/events/exceptions/SdkError";
import { homeViewInput } from "@/domain/events/validations/homeViewValidation";

export namespace Events {
    export async function viewHomeRequest(data: homeViewInput) {
        const options = await buildRequest({
            baseEndpoint: BASE_URL,
            path: HOME_PATH,
            method: "POST",
            bodyContent: data
        });

        try {
            const response: AxiosResponse = await axios.request(options)

            return {
                data: response.data,
                status: response.status,
                statusText: response.statusText,
                config: response.config
            }            
        } catch (err: any) {
            const lastKnownError = {
                data: err.response.data,
                status: err.response.status,
                statusText: err.response.statusText,
                config: err.config
            }
            console.info(`Request failed with Exception : ${JSON.stringify(lastKnownError)}\n`)
            throw new SdkError(lastKnownError);
        }
    }
}
