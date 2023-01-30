import { z } from "zod";

export const cartTransactionSchema = z
    .object({
        id: z.string({
            invalid_type_error: "id must be a string"
        }),
        items: z.array(
            z.object({
                pid: z
                .string({
                    invalid_type_error: "pid must be a string"
                }),
                sku: z
                    .string({
                        invalid_type_error: "sku must be a string"
                }),
                quantity: z
                    .string({
                        invalid_type_error: "quantity must be a string"
                })
            })
        )
        .length(20)
        .transform((array) => array.filter((item) => item.sku))
        .refine(
            (array) => {
                return array.length > 0
            },
            {
                message: 'Cart must have at least 1 item'
            }
        )
    });