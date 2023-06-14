//example ES6 Event homeView
import { EventClient } from "@linx_impulse/impulse-sdk-js"

const event = new EventClient({
    type: 'backend',
    secretKey: 'test',
    apiKey: 'my-apiKey',
    deviceId: 'fb4e49b6-35e3-42a1-a397-960f0b37ab6a',
    source: 'app',
    salesChannel: "12"
})

event.home()
    .url('https://test.com.br')
    .deviceId('fb4e49b6-35e3-42a1-a397-960f0b37ab6a')
    .send()
    .then((res) => console.log(res.status))