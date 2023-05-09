//category, subcategory
import { z } from "zod";
import { userSchema } from "@/events/application/schemas/user.schema";
import { deviceIdSchema } from "@/events/application/schemas/device-id.schema";
import { infoSchema } from "@/events/application/schemas/info.schema";
import { apiKeySchema } from "@/events/application/schemas/api-key.schema";
import { sourceSchema } from "@/events/application/schemas/source.schema";
import { identitySchema } from "@/events/application/schemas/identity.schema";
import { urlSchema } from "@/events/application/schemas/url.schema";
import { salesChannelSchema } from "@/events/application/schemas/sales-channel.schema";
import { categorySubcategorySchema } from "@/events/application/schemas/category-subcategory.schema";
import { tagSchema } from "@/events/application/schemas/tag.schema";

export const categorySubcategoryDataValidation = z.object({
    apiKey: apiKeySchema,
    source: sourceSchema,
    user: userSchema,
    identity: identitySchema,
    url: urlSchema,
    salesChannel: salesChannelSchema,
    categories: categorySubcategorySchema,
    tag: tagSchema
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

export type categorySubcategoryInputValidation = z.input<typeof categorySubcategoryDataValidation>;
export type categorySubcategoryOutputValidation = z.output<typeof categorySubcategoryDataValidation>;
