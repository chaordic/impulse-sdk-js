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

export const productDataValidation = z.object({
    apiKey: apiKeySchema,
    source: sourceSchema,
    user: userSchema,
    identity: identitySchema,
    url: urlSchema,
    salesChannel: salesChannelSchema
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
    productSchema
)

export type ProductInputValidation = z.infer<typeof productDataValidation>;
export type ProductOutputValidation = z.input<typeof productDataValidation>;
