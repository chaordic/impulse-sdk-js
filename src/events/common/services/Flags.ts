import { LinxImpulseError } from "@/events/application/errors/linx-impulse-error";
import { FLAGS_PATH, SUITE_URL } from "@/events/common/helpers/strings/constants";
import { Request } from "@/events/infrastructure/axios/requests/request-generator";
import axios, { AxiosResponse } from "axios";

export class FlagsService {
    public async getFlags(): Promise<object | Error> { 
        try {
            const options = await new Request(
                new URL(`${SUITE_URL.href}/${FLAGS_PATH}/${API_KEY}`),
                'GET'
            )
            .build();
            
            const response: AxiosResponse = await axios.request(options)
            return response.data
        } catch (err: any) {
            throw new LinxImpulseError(err);
        }
    }
}
