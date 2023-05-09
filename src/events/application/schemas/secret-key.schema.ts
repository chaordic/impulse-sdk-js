import { z } from "zod";

export const secretKeySchema = z
    .string({
        required_error: "secretKey is required",
        invalid_type_error: "secretKey must be a string"
    })

export type SecretKeyInput = z.input<typeof secretKeySchema>;
