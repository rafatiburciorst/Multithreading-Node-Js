import { Worker } from 'node:worker_threads'

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./workers/worker.mjs', { workerData })
    worker.on('message', resolve)
    worker.on('error', reject)
    worker.on('exit', (code) => {
      if (code === 0) {
        reject(new Error(`Worker stopped with exit code ${code}`))
      }
    })
  })
}

runService('Meu nome é Rafael')
  .then((result) => console.log(result))
  .catch((err) => console.error(err))