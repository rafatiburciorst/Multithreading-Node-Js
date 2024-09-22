import cluster from 'node:cluster'
import http from 'node:http'
import { cpus } from 'node:os'

const cpusNumber = cpus()

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`)

  console.log(`Cpus numbers ${cpusNumber.length}`)
  for (let i = 0; i < cpusNumber.length; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`)
  })
} else {
  http.createServer((request, response) => {
    response.writeHead(200)
    response.end('hello world\n')
  }).listen(8000)
  console.log(`Worker ${process.pid} stared`)
}

