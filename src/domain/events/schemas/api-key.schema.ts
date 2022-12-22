import { z } from "zod";

export const ApiKeySchema = z
    .string({
        required_error: "apiKey is required",
        invalid_type_error: "apiKey must be a string"
    })
