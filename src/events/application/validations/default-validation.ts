//home, not_found, other, landing_page, hotsite, checkout

import { z } from "zod";
import { userSchema } from "@/events/application/schemas/user-schema";
import { deviceIdSchema } from "@/events/application/schemas/device-id-schema";
import { infoSchema } from "@/events/application/schemas/info-schema";
import { apiKeySchema } from "@/events/application/schemas/api-key-schema";
import { sourceSchema } from "@/events/application/schemas/source-schema";
import { identitySchema } from "@/events/application/schemas/identity-schema";
import { urlSchema } from "@/events/application/schemas/url-schema";
import { salesChannelSchema } from "@/events/application/schemas/sales-channel-schema";

type InferTypes<Z> = Z extends z.ZodType<infer Output, infer Defs, infer Input> ? [Output, Defs, Input] : [never, never, never];
type InferOutput<Z> = InferTypes<Z>[0];
type InferDefs<Z> = InferTypes<Z>[1];
type InferInput<Z> = InferTypes<Z>[2];

const defaultDataValidation = z.object({
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

function restrict<T, Output, Def extends z.ZodTypeDef, Input = Output>(defaultDataValidation: z.ZodType<Output, Def, Input>) {
    return (t: T) => defaultDataValidation.parse(t);
}

export const validate = restrict<Record<string, unknown>, InferOutput<typeof defaultDataValidation>, InferDefs<typeof defaultDataValidation>, InferInput<typeof defaultDataValidation>>(defaultDataValidation);
export type DefaultInputValidation = z.infer<typeof defaultDataValidation>;
export type DefaultOutput = z.output<typeof defaultDataValidation>;