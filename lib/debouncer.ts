/**
 * debouncer
 * @param ms : timeout milliseconds
 * @param fn : funtion to apply debounce
 * @returns : debounced function reference
 */
const debouncer = function (ms: number = 0, fn : Function = () => {}): Function {
  let id: NodeJS.Timeout

  return (): void => {
    if (id) {
      clearTimeout(id)
    }

    id = setTimeout(() => {
      clearTimeout(id)

      fn()
    }, ms)
  }
}

export default debouncer
