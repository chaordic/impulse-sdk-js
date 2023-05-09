import { UserInput } from "@/events/application/schemas/user.schema";
import { SourceInput } from "@/events/application/schemas/source.schema";
import { DeviceInput } from "@/events/application/schemas/device-id.schema";
import { UrlInput } from "@/events/application/schemas/url.schema";
import { SalesChannelInput } from "@/events/application/schemas/sales-channel.schema";
import { InfoInput } from "@/events/application/schemas/info.schema";
import { IdentityInput } from "@/events/application/schemas/identity.schema";

export interface EventBuilder {
    user?(user: UserInput): this;
    source(source: SourceInput): this;
    deviceId(deviceId: DeviceInput): this;
    identity?(identity: IdentityInput): this;
    info?(info: InfoInput): this;
    salesChannel?(salesChannel: SalesChannelInput): this;
    url(url: UrlInput): this;
    send(): Promise<void>
}
