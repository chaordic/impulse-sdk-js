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

export type SearchQuery = z.input<typeof searchSchema.shape.query>;
export type SearchId = z.input<typeof searchSchema.shape.searchId>; 
export type SearchItems = z.input<typeof searchSchema.shape.items>; 
