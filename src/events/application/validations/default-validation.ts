import { z } from "zod";
import { userSchema } from "@/events/application/schemas/user-schema";
import { deviceIdSchema } from "@/events/application/schemas/device-id-schema";
import { infoSchema } from "@/events/application/schemas/info-schema";
import { apiKeySchema } from "@/events/application/schemas/api-key-schema";
import { sourceSchema } from "@/events/application/schemas/source-schema";
import { identitySchema } from "@/events/application/schemas/identity-schema";
import { urlSchema } from "@/events/application/schemas/url-schema";
import { salesChannelSchema } from "@/events/application/schemas/sales-channel-schema";
import { pageSchema } from "@/events/application/schemas/page-schema";

export const defaultDataValidation = z.object({
    apiKey: apiKeySchema,
    source: sourceSchema,
    user: userSchema,
    identity: identitySchema,
    url: urlSchema,
    salesChannel: salesChannelSchema,
    page: pageSchema,
    deviceId: deviceIdSchema,
    info: infoSchema
})

export type DefaultInputValidation = z.infer<typeof defaultDataValidation>;
export type DefaultOutputValidation = z.output<typeof defaultDataValidation>;
