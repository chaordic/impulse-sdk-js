//example ES6 Event homeView
import { EventClient } from "@chaordic/impulse-sdk-js"

const event = new EventClient({
    type: 'frontend',
    apiKey: 'my-apiKey',
    http: {
        retryPolicy: 'exponential',
        sendAsBeacon: true
    }
})

const home = event.home()
    .user({'id': '123', email: 'test@linx.net'})
    .url('https://teste.com')
    .send()
    .then((res) => console.log(res.status))
