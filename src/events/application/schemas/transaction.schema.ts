import { z } from "zod";

export const transactionSchema = z
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
                price: z
                    .string({
                        invalid_type_error: "price must be a string"
                    }),
                quantity: z
                    .number({
                        invalid_type_error: "quantity must be a number"
                    
                    })
            })
            .partial({
                sku: true,
                price: true,
            })
            .refine(
              item => item.sku || item.price,
              'Either sku or price should be filled in',
            )
        )
        .min(1)
        .transform((array) => array.filter((item) => item.pid))
        .refine(
            (array) => {
                return array.length > 0
            },
            {
                message: 'Transaction must have at least 1 item'
            }
        )
    });

export type TransactionId = z.input<typeof transactionSchema.shape.id>;
export type TransactionItems = z.input<typeof transactionSchema.shape.items>; 
