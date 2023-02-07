import { z } from "zod";

export const categorySubcategorySchema = z
    .string({
        required_error: "Categories is required",
        invalid_type_error: "Categories must be a array"
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
