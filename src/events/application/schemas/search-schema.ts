import { z } from "zod";

export const searchSchema = z
    .object({
        query: z.string({
            invalid_type_error: "query must be a string"
        }),
        searchId: z.string({
            invalid_type_error: "searchId must be a string"
        })
        .uuid(),
        items: z.array(
            z.object({
                pid: z
                .string({
                    invalid_type_error: "pid must be a string"
                }),
            })
        )
        .min(1)
        .transform((array) => array.filter((item) => item.pid))
        .refine(
            (array) => {
                return array.length > 0
            },
            {
                message: 'Items must have at least 1 item'
            }
        )
    });