//example ES6 Event homeView
import { Event } from "@chaordic/impulse-sdk-js"

const event = new Event({
    apiKey: 'my-apikey',
    secretKey: 'my-secret-key',
    retryPolicy: 'exponential',
    sendAsBeacon: true,
    source: 'app',
    deviceId: 'fb4e49b6-35e3-42a1-a397-960f0b37ab6a'
})

const home = event.home()
    .user({'id': '123', email: 'test@linx.net'})
    .url('https://teste.com')
    .send()
    .then((res) => console.log(res.status))
