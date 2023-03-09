import { API_KEY, FLAGS_PATH, SUITE_URL } from "@/events/common/helpers/strings/constants";
import { buildRequest } from "@/events/infrastructure/axios/requests/request-generator";
import axios, { AxiosResponse } from "axios";

export class FlagsService {
    public async getFlags(): Promise<object | Error> {
        
        const options = await buildRequest({
            baseEndpoint: `${SUITE_URL}${API_KEY}`,
            path: FLAGS_PATH,
            method: "GET",
        });
    
        try {
            const response: AxiosResponse = await axios.request(options)
            return response.data
        } catch (err: any) {
            throw new Error(err);
        }
    }
}
