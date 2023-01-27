import { z } from "zod";

export const infoSchema = z
    .object({
        info: z
            .object({
                pageViewId: z
                    .string({
                        invalid_type_error: "pageViewId must be a string"
                    })
                    .optional(),
                shopbackCookie: z
                    .string({
                        invalid_type_error: "shopbackCookie must be a string"
                    })
                    .optional(),
                percycleCookie: z
                    .string({
                        invalid_type_error: "percycleCookie must be a string"
                    })
                    .optional(),
                chaordicCookie: z
                    .string({
                        invalid_type_error: "chaordicCookie must be a string"
                    }),
                impulseSuiteCookie: z
                    .string({
                        invalid_type_error: "impulseSuiteCookie must be a string"
                    })
                    .optional(),
                referrer: z
                    .string({
                        invalid_type_error: "referrer must be a string"
                    })
                    .optional()
            })
    });
