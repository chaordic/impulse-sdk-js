import { z } from "zod";

export const searchIdSchema = z
    .string({
        invalid_type_error: "searchId must be a string"
    })
    .uuid()
    .optional()

export type SearchIdInput = z.input<typeof searchIdSchema>;
