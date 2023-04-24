//example ES6 Event homeView
import { Home } from "@chaordic/impulse-sdk-js"

const home = new Home({
    apiKey: 'my-apiKey',
    secretKey: 'my-secret-key',
    retryPolicy: 'exponential',
    sendAsBeacon: true,
    source: 'mobile'
})

home
    .user({'id': '123', email: 'test@linx.com.br'})
    .deviceId('fb4e49b6-35e3-42a1-a397-960f0b37ab6a')
    .url('https://test.com')
    .send()
    .then((res) => console.log(res.status))

console.log(home)