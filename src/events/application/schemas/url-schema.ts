import { z } from "zod";

export const urlSchema = z
    .string({
        invalid_type_error: "url must be a string"
    })
