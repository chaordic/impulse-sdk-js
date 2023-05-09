import { z } from "zod";
import { userSchema } from "@/events/application/schemas/user.schema";
import { deviceIdSchema } from "@/events/application/schemas/device-id.schema";
import { infoSchema } from "@/events/application/schemas/info.schema";
import { apiKeySchema } from "@/events/application/schemas/api-key.schema";
import { sourceSchema } from "@/events/application/schemas/source.schema";
import { identitySchema } from "@/events/application/schemas/identity.schema";
import { urlSchema } from "@/events/application/schemas/url.schema";
import { cartTransactionSchema } from "@/events/application/schemas/cart-transaction.schema";
import { salesChannelSchema } from "@/events/application/schemas/sales-channel.schema";

export const cartTransactionValidation = z.object({
    apiKey: apiKeySchema,
    source: sourceSchema,
    user: userSchema,
    identity: identitySchema,
    url: urlSchema,
    salesChannel: salesChannelSchema,
    deviceId: deviceIdSchema,
    info: infoSchema
})
.and(
    cartTransactionSchema
)

export type CartTransactionInput = z.input<typeof cartTransactionValidation>;
export type CartTransactionOutput = z.output<typeof cartTransactionValidation>;
