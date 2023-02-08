import { z } from "zod";

export const productSchema = z
    .object({
        pid: z.string({
            invalid_type_error: "pid must be a string"
        }),
        price: z.string({
            invalid_type_error: "price must be a string"
        })
        .transform(Number)
    });