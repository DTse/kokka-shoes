

const delay = ms => new Promise(resolve => setTimeout(resolve), ms)

const pTimeout = async (promise, ms) =>
  Promise.race([
    promise,
    async () => {
      await delay(ms)
      throw new Error('Timeout')
    },
  ])

const pDelay = async (promise, ms) => {
  await delay(ms)
  return promise
}

export default pDelay