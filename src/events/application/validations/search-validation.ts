import { z } from "zod";
import { userSchema } from "@/events/application/schemas/user-schema";
import { deviceIdSchema } from "@/events/application/schemas/device-id-schema";
import { infoSchema } from "@/events/application/schemas/info-schema";
import { apiKeySchema } from "@/events/application/schemas/api-key.schema";
import { sourceSchema } from "@/events/application/schemas/source-schema";
import { identitySchema } from "@/events/application/schemas/identity-schema";
import { urlSchema } from "@/events/application/schemas/url-schema";
import { searchSchema } from "@/events/application/schemas/search-schema";

export const searchValidation = z.object({
    apiKey: apiKeySchema,
    source: sourceSchema,
    user: userSchema,
    identity: identitySchema,
    url: urlSchema
})
.and(
    z.object({
        deviceId: deviceIdSchema
    })
    .or(
        z.object({
            info: infoSchema
        })        
    )
)
.and(
    searchSchema
)

export type SearchInputValidation = z.infer<typeof searchValidation>;
export type SearchOutputValidation = z.input<typeof searchValidation>;
