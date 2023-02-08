import { z } from "zod";
import { userSchema } from "@/events/application/schemas/user-schema";
import { deviceIdSchema } from "@/events/application/schemas/device-id-schema";
import { infoSchema } from "@/events/application/schemas/info-schema";
import { apiKeySchema } from "@/events/application/schemas/api-key-schema";
import { sourceSchema } from "@/events/application/schemas/source-schema";
import { identitySchema } from "@/events/application/schemas/identity-schema";
import { urlSchema } from "@/events/application/schemas/url-schema";
import { salesChannelSchema } from "@/events/application/schemas/sales-channel-schema";
import { productSchema } from "@/events/application/schemas/product-schema";

type InferTypes<Z> = Z extends z.ZodType<infer Output, infer Defs, infer Input> ? [Output, Defs, Input] : [never, never, never];
type InferOutput<Z> = InferTypes<Z>[0];
type InferDefs<Z> = InferTypes<Z>[1];
type InferInput<Z> = InferTypes<Z>[2];

const productDataValidation = z.object({
    apiKey: apiKeySchema,
    source: sourceSchema,
    user: userSchema,
    identity: identitySchema,
    url: urlSchema,
    salesChannel: salesChannelSchema
})
.and(
    z.union([
        deviceIdSchema,
        infoSchema
    ])
)
.and(
    productSchema
)

function restrict<T, Output, Def extends z.ZodTypeDef, Input = Output>(productDataValidation: z.ZodType<Output, Def, Input>) {
    return (t: T) => productDataValidation.parse(t);
}

export const validate = restrict<Record<string, unknown>, InferOutput<typeof productDataValidation>, InferDefs<typeof productDataValidation>, InferInput<typeof productDataValidation>>(productDataValidation);
export type ProductInputValidation = z.infer<typeof productDataValidation>;
export type ProductOutputValidation = z.input<typeof productDataValidation>;