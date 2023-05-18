import { z } from "zod";
import { productSchema } from "@/events/application/schemas/product.schema";
import { defaultDataValidation } from "@/events/application/validations/default.validation";

export const productDataValidation = z.intersection(defaultDataValidation, productSchema)

export type ProductInputValidation = z.infer<typeof productDataValidation>;
export type ProductOutputValidation = z.input<typeof productDataValidation>;
