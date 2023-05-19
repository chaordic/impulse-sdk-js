//Example node Event homeview
import { EventClient } from "@chaordic/impulse-sdk-js"

const event = new EventClient({
    type: 'backend',
    apiKey: 'my-apiKey',
    deviceId: 'fb4e49b6-35e3-42a1-a397-960f0b37ab6a',
    source: 'app',
    secretKey: '123123123',
    salesChannel: '12',
    http: {
        retryPolicy: 'exponential',
        sendAsBeacon: true
    }
})


const cart = event.cart()
    .user({'id': '123', email: 'test@linx.net'})
    .url('https://teste.com')
    .id('123456')
    .items([
        {
            pid: "PID_123456",
            sku: "SKU_123456",
            quantity: "2"
        }
    ])
    .send()
    .then((res) => console.log(res.status))
