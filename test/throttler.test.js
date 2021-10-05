'use strict'

const throttler = require('../dist/lib/throttler')

const throttleTimeMs = 500
const callback = jest.fn()
const throttledFnRef = throttler(throttleTimeMs, callback)

afterEach(() => {
  jest.useRealTimers()
})

test('throttled function reference', () => {
  expect(typeof throttledFnRef).toBe('function')
})

test('throttler call more than once', async () => {
  jest.useFakeTimers()

  const intervalId = setInterval(throttledFnRef, 10)

  const timeoutProcessMs = 1600
  setTimeout(() => clearInterval(intervalId), timeoutProcessMs)

  expect(callback).not.toBeCalled()

  jest.advanceTimersByTime(timeoutProcessMs)

  const expectedNumCalled = Math.floor(timeoutProcessMs / throttleTimeMs)
  expect(callback).toHaveBeenCalledTimes(expectedNumCalled)
})
