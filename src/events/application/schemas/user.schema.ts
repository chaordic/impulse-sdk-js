import { z } from "zod";

export const userSchema = z
    .object({
        id: z
            .string({
                required_error: "id is required",
                invalid_type_error: "id must be a string"
            })
            .or(
                z.number({
                    required_error: "id is required",
                    invalid_type_error: "id must be a number"
                })
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

export type UserInput = z.input<typeof userSchema>;