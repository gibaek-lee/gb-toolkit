'use strict'

const debouncer = require('../dist/lib/debouncer')
const callback = jest.fn()
const debouncedFnRef = debouncer(300, callback)

afterEach(() => {
  jest.useRealTimers()
})

test('debounced function reference', () => {
  expect(typeof debouncedFnRef).toBe('function')
})

test('debouncer call once', () => {
  jest.useFakeTimers()

  const CALL_TIMES = 100

  for (let i = 0; i < CALL_TIMES; i++) {
    debouncedFnRef()
  }

  expect(callback).not.toBeCalled()

  jest.runAllTimers()

  expect(callback).toHaveBeenCalledTimes(1)
})
