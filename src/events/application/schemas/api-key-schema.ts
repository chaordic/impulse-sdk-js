import { APIKEY } from "@/events/common/helpers/constants";
import { z } from "zod";

export const apiKeySchema = z
    .string({
        required_error: "apiKey is required",
        invalid_type_error: "apiKey must be a string"
    }).default(APIKEY)
