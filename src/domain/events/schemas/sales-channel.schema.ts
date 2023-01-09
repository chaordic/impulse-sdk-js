import { z } from "zod";

export const SalesChannelSchema = z
    .string({
        invalid_type_error: "salesChannel must be a string"
    })
