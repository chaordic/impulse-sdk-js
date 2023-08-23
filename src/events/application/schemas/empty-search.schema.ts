import { z } from "zod";

export const emptySearchSchema = z
    .object({
        query: z.string({
            invalid_type_error: "query must be a string"
        }),
        searchId: z.string({
            invalid_type_error: "searchId must be a string"
        })
        .uuid()
    });

export type EmptySearchQuery = z.input<typeof emptySearchSchema.shape.query>;
export type EmptySearchId = z.input<typeof emptySearchSchema.shape.searchId>; 
