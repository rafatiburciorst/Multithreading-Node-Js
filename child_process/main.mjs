import { fork } from 'node:child_process'

const forked = fork('./child_process/child.mjs')

forked.on('message', (msg) => {
  console.log(`Message from child ${JSON.stringify(msg)}`)
})

forked.send({ hello: 'world' })

