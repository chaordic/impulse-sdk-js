import { z } from "zod";

export const deviceIdSchema = z
    .object({
        deviceId: z
            .string({
                invalid_type_error: "deviceId must be a string"
            })
            .uuid()
    });
