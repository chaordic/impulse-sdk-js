export * from "./events/application/ports/event/event";

import { EventClient } from './events/application/ports/event/event'

const event = new EventClient({
    type: 'backend',
    apiKey: 'teste-iury',
    deviceId: 'teste-123',
    source: 'app',
    secretKey: '123123123',
    salesChannel: '12',
    http: {
        retryPolicy: 'exponential',
        sendAsBeacon: true
    }
})

event.home().identity({  // pode ser gerado automaticamente de acordo com o onsite (menos no app)
    browserId: 'nao precisa',
    session: 'nao precisa',
    anonymousUserId: ''
})

event.home().info() // gerado automaticamente com base no repo https://github.com/chaordic/platform-event-session-module


event.home().url() // pode ser detectado com base no doument e no window.locationm

const cart = event.cart()

const cartWithUser = cart.user({
    id: 'teste',
    email: 'teste@test.com'
})

cartWithUser.send({  // fazer o send enviar os atributos obrigatórios de cada tipo de evento
    id: '123',
    items: [

    ]
})