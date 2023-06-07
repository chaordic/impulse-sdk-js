import { z } from "zod";

export const deviceIdSchema = z
    .string({
        invalid_type_error: "deviceId must be a string",
        description: 'teste de descrição do deviceId'
    })
    .uuid()

export type DeviceInput = z.input<typeof deviceIdSchema>;
