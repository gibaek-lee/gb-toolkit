/**
 * finish-scroll
 * @param ms: interval time observe scroll continued
 * @returns Promise<unkown>
 */
export const RES_SCROLL_FINISH = 'scroll finished'

const finishScroll = (
  ms: number,
  refMockScrollY: { scrollY: number }
): Promise<string> => {
  let prevY: number = window ? window.scrollY : 0

  return new Promise((resolve: (value: string) => void) => {
    let id = setInterval(() => {
      const compareParam = window ? window.scrollY : refMockScrollY.scrollY

      if (prevY !== compareParam) {
        prevY = compareParam
      } else {
        clearInterval(id)
        resolve(RES_SCROLL_FINISH)
      }
    }, ms)
  })
}

export default finishScroll
