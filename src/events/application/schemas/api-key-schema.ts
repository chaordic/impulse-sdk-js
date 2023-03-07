import { API_KEY } from "@/events/common/helpers/strings/constants";
import { z } from "zod";

export const apiKeySchema = z
    .string({
        required_error: "apiKey is required",
        invalid_type_error: "apiKey must be a string"
    })
    .transform(value => value.trim())
    .transform(value => value === '' ? API_KEY : value )