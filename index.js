import debouncer from './dist/lib/debouncer'
import throttler from './dist/lib/throttler'
import sleep from './dist/lib/sleep'
import pipeline from './dist/lib/pipeline'
import finishScroll, { RES_SCROLL_FINISH } from './dist/lib/finish-scroll'

export default {
  debouncer,
  throttler,
  sleep,
  pipeline,
  finishScroll,
  RES_SCROLL_FINISH
}
