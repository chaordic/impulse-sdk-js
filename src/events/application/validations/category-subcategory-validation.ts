//category, subcategory
import { z } from "zod";
import { userSchema } from "@/events/application/schemas/user-schema";
import { deviceIdSchema } from "@/events/application/schemas/device-id-schema";
import { infoSchema } from "@/events/application/schemas/info-schema";
import { apiKeySchema } from "@/events/application/schemas/api-key-schema";
import { sourceSchema } from "@/events/application/schemas/source-schema";
import { identitySchema } from "@/events/application/schemas/identity-schema";
import { urlSchema } from "@/events/application/schemas/url-schema";
import { salesChannelSchema } from "@/events/application/schemas/sales-channel-schema";
import { categorySubcategorySchema } from "@/events/application/schemas/category-subcategory-schema";

type InferTypes<Z> = Z extends z.ZodType<infer Output, infer Defs, infer Input> ? [Output, Defs, Input] : [never, never, never];
type InferOutput<Z> = InferTypes<Z>[0];
type InferDefs<Z> = InferTypes<Z>[1];
type InferInput<Z> = InferTypes<Z>[2];

const categorySubcategoryDataValidation = z.object({
    apiKey: apiKeySchema,
    source: sourceSchema,
    user: userSchema,
    identity: identitySchema,
    url: urlSchema,
    salesChannel: salesChannelSchema,
    categories: categorySubcategorySchema
})
.and(
    z.union([
        deviceIdSchema,
        infoSchema
    ])
)
function restrict<T, Output, Def extends z.ZodTypeDef, Input = Output>(categorySubcategoryDataValidation: z.ZodType<Output, Def, Input>) {
    return (t: T) => categorySubcategoryDataValidation.parse(t);
}

export const validate = restrict<Record<string, unknown>, InferOutput<typeof categorySubcategoryDataValidation>, InferDefs<typeof categorySubcategoryDataValidation>, InferInput<typeof categorySubcategoryDataValidation>>(categorySubcategoryDataValidation);
export type categorySubcategoryInputValidation = z.input<typeof categorySubcategoryDataValidation>;
export type categorySubcategoryOutputValidation = z.output<typeof categorySubcategoryDataValidation>;