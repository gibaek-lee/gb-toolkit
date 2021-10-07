/**
 * sleep
 * @param ms: sleep time in milliseconds
 * @returns: constructed Promise
 */
const sleep = (ms: number): Promise<any> => {
  return new Promise(res => setTimeout(() => res(`${ms} sleep finish`), ms))
}

export default sleep
