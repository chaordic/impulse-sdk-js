import { z } from "zod";
import { UserSchema } from "@/domain/events/schemas/user.schema";
import { DeviceIdSchema } from "@/domain/events/schemas/device-id.schema";
import { InfoSchema } from "@/domain/events/schemas/info.schema";
import { ApiKeySchema } from "@/domain/events/schemas/api-key.schema";
import { SourceSchema } from "@/domain/events/schemas/source.schema";
import { IdentitySchema } from "@/domain/events/schemas/identity.schema";
import { UrlSchema } from "@/domain/events/schemas/url.schema";
import { SalesChannelSchema } from "@/domain/events/schemas/sales-channel.schema";

const eventHomeValidation = z.object({
    apiKey: ApiKeySchema,
    source: SourceSchema,
    user: UserSchema,
    identity: IdentitySchema,
    url: UrlSchema,
    salesChannel: SalesChannelSchema
}).and(
    z.union([
        DeviceIdSchema,
        InfoSchema
    ])
)

export type homeInput = z.input<typeof eventHomeValidation>;
export type eventHomeInput = z.input<typeof eventHomeValidation>;
export type eventHomeOutput = z.output<typeof eventHomeValidation>;
export namespace Events {
    export class Home {
        home: {};

        constructor(data: eventHomeInput) {
            this.home = data
        }
    }   
    export class Info {
        home: {};

        constructor(data: homeInput) {
            this.home = data
        }
    }   
}
