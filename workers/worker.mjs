import { parentPort, workerData } from 'node:worker_threads'

function heavyComputation(data) {
  // throw new Error('Deu ruim')
  return data.split('').reverse().join('')
}

const result = heavyComputation(workerData)

parentPort.postMessage(result)