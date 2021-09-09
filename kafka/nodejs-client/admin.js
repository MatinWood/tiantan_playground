const kafka = require('./kafka')

async function admin(){
    const admin = kafka.admin()

    await admin.connect()
    await admin.listTopics()

    await admin.disconnect()
}

admin()