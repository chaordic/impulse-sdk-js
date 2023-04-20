export interface IEvent {
    apiKey: string,
    secretKey: string,
    retryPolicy: string,
    sendAsBeacon: boolean,
    source: string
}
