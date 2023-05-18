import { z } from "zod";
import { searchSchema } from "@/events/application/schemas/search.schema";
import { defaultDataValidation } from "@/events/application/validations/default-validation";

export const searchValidation = z.intersection(defaultDataValidation, searchSchema)

export type SearchInputValidation = z.infer<typeof searchValidation>;
export type SearchOutputValidation = z.input<typeof searchValidation>;

export type EmptySearchInputValidation = z.input<typeof searchValidation>;
export type EmptySearchOutputValidation = z.output<typeof searchValidation>;
