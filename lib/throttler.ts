/**
 * throttler
 * @param ms : timeout milliseconds
 * @param fn : funtion to apply debounce
 * @returns : debounced function reference
 */
const throttler = function (ms: number = 0, fn: Function = () => {}): Function {
  let id: NodeJS.Timeout | null = null

  return (): void => {
    if (id === null) {
      id = setTimeout(() => {
        clearTimeout(id)
        id = null

        fn()
      }, ms)
    }
  }
}

export default throttler
