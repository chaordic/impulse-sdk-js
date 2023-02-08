import { z } from "zod";
import { userSchema } from "@/events/application/schemas/user-schema";
import { deviceIdSchema } from "@/events/application/schemas/device-id-schema";
import { infoSchema } from "@/events/application/schemas/info-schema";
import { apiKeySchema } from "@/events/application/schemas/api-key-schema";
import { sourceSchema } from "@/events/application/schemas/source-schema";
import { identitySchema } from "@/events/application/schemas/identity-schema";
import { urlSchema } from "@/events/application/schemas/url-schema";
import { searchSchema } from "@/events/application/schemas/search-schema";

type InferTypes<Z> = Z extends z.ZodType<infer Output, infer Defs, infer Input> ? [Output, Defs, Input] : [never, never, never];
type InferOutput<Z> = InferTypes<Z>[0];
type InferDefs<Z> = InferTypes<Z>[1];
type InferInput<Z> = InferTypes<Z>[2];

const searchValidation = z.object({
    apiKey: apiKeySchema,
    source: sourceSchema,
    user: userSchema,
    identity: identitySchema,
    url: urlSchema
})
.and(
    z.union([
            deviceIdSchema,
            infoSchema
        ])
    )
.and(
    searchSchema
)

function restrict<T, Output, Def extends z.ZodTypeDef, Input = Output>(searchValidation: z.ZodType<Output, Def, Input>) {
    return (t: T) => searchValidation.parse(t);
}

export const validate = restrict<Record<string, unknown>, InferOutput<typeof searchValidation>, InferDefs<typeof searchValidation>, InferInput<typeof searchValidation>>(searchValidation);
export type SearchInputValidation = z.infer<typeof searchValidation>;
export type SearchOutputValidation = z.input<typeof searchValidation>;