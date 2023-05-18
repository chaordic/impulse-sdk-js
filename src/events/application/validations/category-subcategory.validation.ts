import { z } from "zod";
import { categorySubcategorySchema } from "@/events/application/schemas/category-subcategory.schema";
import { tagSchema } from "@/events/application/schemas/tag.schema";
import { defaultDataValidation } from "@/events/application/validations/default.validation";

export const categorySubcategoryDataValidation = defaultDataValidation
    .extend({
        categories: categorySubcategorySchema,
        tag: tagSchema
    })

export type CategoryInputValidation = z.input<typeof categorySubcategoryDataValidation>;
export type CategoryOutputValidation = z.output<typeof categorySubcategoryDataValidation>;

export type SubcategoryInputValidation = z.input<typeof categorySubcategoryDataValidation>;
export type SubcategoryOutputValidation = z.output<typeof categorySubcategoryDataValidation>;
