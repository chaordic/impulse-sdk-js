import { z } from "zod";

export const SalesChannelSchema = z
    .number({
        invalid_type_error: "salesChannel must be a number"
    })
