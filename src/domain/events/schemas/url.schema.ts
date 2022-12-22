import { z } from "zod";

export const UrlSchema = z
    .string({
        invalid_type_error: "url must be a string"
    })
