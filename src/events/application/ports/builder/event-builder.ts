export interface EventBuilder {
    user?<T>(user: Array<T>): this;
    source(source: string): this;
    deviceId?(deviceId: string): this;
    identity<T>(identity: Array<T>): this;
    info<T>(info: Array<T>): this;
    salesChannel?(salesChannel: string): this;
    url(url: string): this;
}