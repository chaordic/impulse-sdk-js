import axios, { AxiosResponse } from "axios";

import { buildRequest } from "@/events/infrastructure/axios/requests/request-generator";
import { BASE_URL, HOME_PATH } from "@/events/common/helpers/strings/constants";
import { DefaultApplicationError } from "@/events/application/errors/default-application-error";
import { DefaultInputValidation, defaultDataValidation } from "@/events/application/validations/default-validation";
import { Parser } from "@/events/common/helpers/objects/parser";
import { EventBuilder } from "@/events/application/ports/builder/event-builder";
import { buildRelativeUrl } from "@/events/common/helpers/strings/buildRelativeUrl";

export namespace Events {

    type Params = {
        [key: string]: any
    }    
    export class Home implements EventBuilder {
        private data: Params = {};
        
        user?<T>(user: Array<T>): this {
            this.data["user"] = user;
            return this
        }
        identify<T>(identify: Array<T>): this {
            this.data["identify"] = identify;
            return this
        }
        info<T>(info: Array<T>): this {
            this.data["info"] = info;
            return this
        }
        salesChannel(salesChannel: string): this {
            this.data["salesChannel"] = salesChannel;
            return this
        }
        deviceId(deviceId: string): this {
            this.data["deviceId"] = deviceId;
            return this
        }
        source(source: string): this {
            this.data["source"] = source;
            return this
        }
        url(url: string): this {
            this.data["url"] = url || buildRelativeUrl();
            return this
        }
    }

    export async function homeViewRequest(data: DefaultInputValidation) {
        const parser = new Parser(defaultDataValidation)
        
        const options = await buildRequest({
            baseEndpoint: BASE_URL,
            path: HOME_PATH,
            method: "POST",
            bodyContent: parser.validate(data)
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
