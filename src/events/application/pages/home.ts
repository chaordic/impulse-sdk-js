import axios, { AxiosResponse } from "axios";

import { buildRequest } from "@/events/infrastructure/axios/requests/request-generator";
import { BASE_URL, HOME_PATH } from "@/events/common/helpers/constants";
import { DefaultApplicationError } from "@/events/application/errors/default-application-error";
import { defaultInputValidation } from "@/events/application/validations/default-validation";

export namespace Events {
    export async function homeViewRequest(data: defaultInputValidation) {
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
            throw new DefaultApplicationError(lastKnownError);
        }
    }
}
