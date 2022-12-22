import { z } from "zod";

export const DeviceIdSchema = z
    .object({
        deviceId: z
            .string({
                invalid_type_error: "deviceId must be a string"
            })
    });
