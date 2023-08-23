import { z } from "zod";
import { cartSchema } from "@/events/application/schemas/cart.schema";
import { transactionSchema } from "@/events/application/schemas/transaction.schema";
import { defaultDataValidation } from "@/events/application/validations/default.validation";

export const cartValidation = z.intersection(defaultDataValidation, cartSchema)
export type CartInputValidation = z.input<typeof cartValidation>;
export type CartOutputValidation = z.output<typeof cartValidation>;

export const transactionValidation = z.intersection(defaultDataValidation, transactionSchema)
export type TransactionInputValidation = z.input<typeof transactionValidation>;
export type TransactionOutputValidation = z.output<typeof transactionValidation>;
