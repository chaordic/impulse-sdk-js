import { z } from "zod";

export const userSchema = z
    .object({
        id: z
            .string({
                required_error: "id is required",
                invalid_type_error: "id must be a string"
            })
            .transform(
                id => Number(id)
            ),
        email: z
            .string()
                .email(
                    { message: "Invalid email address" }
                )
                .optional(),
        name: z
            .string({
                required_error: "name is required",
                invalid_type_error: "name must be a string"
            })
            .optional(),
        allowMailMarketing: z
            .boolean({
                invalid_type_error: "allowMailMarketing must be a boolean",
            })
            .optional()
    }).optional()
