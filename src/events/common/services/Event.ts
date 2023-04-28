import axios, { AxiosResponse } from "axios";
import { ZodError, ZodType } from "zod";

import { Request } from "@/events/infrastructure/axios/requests/request-generator";
import { BASE_URL } from "@/events/common/helpers/strings/constants";
import { LinxImpulseError } from "@/events/application/errors/linx-impulse-error";
import { Parser } from "@/events/common/helpers/objects/parser";
import { ValidationError } from "@/events/application/errors/validation-error";
import { IEvent } from "@/events/application/ports/event/event";
export class EventService {
    readonly config: IEvent;
    readonly data: any;
    readonly path: string;
    readonly validationSchema: ZodType;

    constructor(path: string, validation: ZodType, config: IEvent) {
        this.path = path;
        this.validationSchema = validation;
        this.config = config
    }

    async send(): Promise<any | Error> {
        Object.assign(this.data, this.config)
        
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
}
