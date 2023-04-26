import { z } from "zod";

export const identitySchema = z
    .object({
        anonymousUserId: z
            .string({
                invalid_type_error: "anonymousUserId must be a string"
            })
            .optional(),
        browserId: z
            .string({
                required_error: "browserId is required",
                invalid_type_error: "browserId must be a string"
            })
            .uuid(),
        session: z.
            string({
                invalid_type_error: "session must be a string"
            })
            .optional()
    })
    .optional();

export type IdentityInput = z.input<typeof identitySchema>;
