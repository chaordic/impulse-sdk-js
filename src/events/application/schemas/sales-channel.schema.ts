import { z } from "zod";

export const salesChannelSchema = z
    .string({
        invalid_type_error: "salesChannel must be a string"
    })
    .or(
        z.array(
            z.string({
                invalid_type_error: "salesChannel must be a array"
            })
            .nonempty(),
        )
    )
    .optional()

export type SalesChannelInput = z.input<typeof salesChannelSchema>;
