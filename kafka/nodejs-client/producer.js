const kafka = require('./kafka')

async function produce_msg(){
    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
        topic: 'kafkajs-topic',
        messages:[
            {value: 'Hello kafkajs user'}
        ]})
    await producer.disconnect()
}

produce_msg()