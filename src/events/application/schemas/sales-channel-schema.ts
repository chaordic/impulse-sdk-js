import { z } from "zod";

export const salesChannelSchema = z
    .string({
        invalid_type_error: "salesChannel must be a string"
    })
    .optional()

export type SalesChannelInput = z.input<typeof salesChannelSchema>;
