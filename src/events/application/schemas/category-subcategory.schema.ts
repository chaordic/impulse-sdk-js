import { z } from "zod";

export const categorySubcategorySchema = z.union([
    z.string({
        required_error: "Categories is required",
        invalid_type_error: "Categories must be a array"
    })
    .array()
    .min(1)
    .refine(
        (array) => {
            return array.length > 0
        },
        {
            message: 'Categories must have at least 1 item'
        }
    ),
    z.array(
        z.object({
            id: z.string({
                invalid_type_error: "id must be a string"
            }).nonempty(),
            name: z.string({
               invalid_type_error: "name must be a string"
            }).nonempty(),
        })
    )
    .refine(
        (object) => {
            return Object.keys(object).length > 0
        },
        {
            message: 'Categories must have at least 1 item'
        }
    )
])

export type CategoryInput = z.input<typeof categorySubcategorySchema>;
export type SubcategoryInput = z.input<typeof categorySubcategorySchema>;
