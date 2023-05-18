import { z } from "zod";
import { cartTransactionSchema } from "@/events/application/schemas/cart-transaction.schema";
import { defaultDataValidation } from "@/events/application/validations/default-validation";

export const cartTransactionValidation1 = defaultDataValidation
    .extend({
        cartTransactionSchema
    })

export const cartTransactionValidation = z.intersection(defaultDataValidation, cartTransactionSchema)

export type CartInputValidation = z.input<typeof cartTransactionValidation>;
export type CartOutputValidation = z.output<typeof cartTransactionValidation>;

export type TransactionInputValidation = z.input<typeof cartTransactionValidation>;
export type TransactionOutputValidation = z.output<typeof cartTransactionValidation>;
