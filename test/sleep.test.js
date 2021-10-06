'use strict'

import gbToolkit from "../index"

test('sleep', async () => {
  let result = 'sleeping'
  const SLEEP_TIME = 2000

  expect(result).toBe('sleeping')

  setTimeout(() => result = 'finish', SLEEP_TIME)
  await gbToolkit.sleep(SLEEP_TIME)

  expect(result).toBe('finish')
})