type EventSource = 'desktop' | 'mobile' | 'app';
export interface EventBuilder {
    user?(user: object): this;
    source(source: EventSource): this;
    deviceId(deviceId: string): this;
    identity?(identity: object): this;
    info?(info: object): this;
    salesChannel?(salesChannel: string): this;
    url(url: string): this;
}
