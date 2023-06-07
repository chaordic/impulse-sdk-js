import { z } from "zod";
import { userSchema } from "@/events/application/schemas/user.schema";
import { deviceIdSchema } from "@/events/application/schemas/device-id.schema";
import { apiKeySchema } from "@/events/application/schemas/api-key.schema";
import { sourceSchema } from "@/events/application/schemas/source.schema";
import { urlSchema } from "@/events/application/schemas/url.schema";
import { salesChannelSchema } from "@/events/application/schemas/sales-channel.schema";

export const defaultDataValidation = z.object({
    apiKey: apiKeySchema,
    source: sourceSchema,
    user: userSchema,
    url: urlSchema,
    salesChannel: salesChannelSchema,
    deviceId: deviceIdSchema,
}).passthrough()

export type DefaultInputValidation = z.infer<typeof defaultDataValidation>;
export type DefaultOutputValidation = z.output<typeof defaultDataValidation>;
