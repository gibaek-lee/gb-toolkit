import debouncer from './dist/lib/debouncer'
import throttler from './dist/lib/throttler'
import sleep from './dist/lib/sleep'
import pipeline from './dist/lib/pipeline'
import finishScroll, { RES_SCROLL_FINISH } from './dist/lib/finish-scroll'
import range from './dist/lib/range'

export default {
  RES_SCROLL_FINISH,
  debouncer,
  throttler,
  sleep,
  pipeline,
  finishScroll,
  range,
}
