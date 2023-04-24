import axios, { AxiosResponse } from "axios";
import { ZodError } from "zod";

import { Request } from "@/events/infrastructure/axios/requests/request-generator";
import { BASE_URL } from "@/events/common/helpers/strings/constants";
import { LinxImpulseError } from "@/events/application/errors/linx-impulse-error";
import { Parser } from "@/events/common/helpers/objects/parser";
import { ValidationError } from "@/events/application/errors/validation-error";
import { isBrowser } from "@/events/common/helpers/strings/isBrowser";
import { getReferrer } from "@/events/common/helpers/strings/buildUrl";
import { setCookie } from "@/events/common/helpers/strings/cookie";
import { buildDeviceType } from "@/events/common/helpers/strings/buildDeviceType";
import { getSystemInfo } from "@/events/common/helpers/strings/systemInfo";
import { getUuid as UUID } from "@/events/common/helpers/strings/uuid";

export class EventService {
    data: any;
    path: string;
    validationSchema: any;

    constructor(path: string, validation: any) {
        this.path = path
        this.validationSchema = validation
    }

    async send(): Promise<any | Error> {
        try {
            const parser = new Parser(this.validationSchema)
            
            const options = await new Request(
                new URL(`${BASE_URL.href}/${this.path}`),
                'POST',
                parser.validate(this.data)
            )
            .build();
            
            const response: AxiosResponse = await axios.request(options)
    
            return {
                data: response.data,
                status: response.status,
                statusText: response.statusText,
                config: response.config
            }
        } catch (err: any) {
            if (err instanceof ZodError) {
                throw new ValidationError(err.message)
            }
            
            const lastKnownError = {
                data: err.response.data,
                status: err.response.status,
                statusText: err.response.statusText,
                config: err.config
            }
            console.error(`Request failed with Exception : ${JSON.stringify(lastKnownError)}\n`)
            throw new LinxImpulseError(err.response.data.message);
        }
    }

    setDefault() {
        if (isBrowser()) {
            this.data.info = {
                referrer: getReferrer(),
                pageViewId: setCookie('chaordic_browserId', UUID()),
                impulseSuiteCookie: setCookie('chaordic_browserId', UUID())
            };

            this.data.identity = {
                session: setCookie('impulsesuite_session', `${new Date().getTime()}-${Math.random()}`),
                browserId: setCookie('chaordic_browserId', UUID())
            };

            this.data.source = buildDeviceType(getSystemInfo())
        }
    }
}
