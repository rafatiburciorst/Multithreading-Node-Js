process.on('message', (msg) => {
  const message = JSON.stringify(msg)
  setTimeout(() => Promise.resolve(console.log(`Message from parent ${message}`)), 1000)
  process.send({ foo: 'bar' })
})