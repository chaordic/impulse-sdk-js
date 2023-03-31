import { z } from "zod";

export const tagSchema = z
    .string({
        invalid_type_error: "Tag must be a array"
    })
    .array()
    .min(1)
    .max(20)
    .refine(
        (array) => {
            return array.length > 0
        },
        {
            message: 'Categories must have at least 1 item'
        }
    )
    .optional()