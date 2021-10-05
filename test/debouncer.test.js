'use strict'

const debouncer = require('../lib/debouncer')
const debouncedFnRef = debouncer(500, () => console.log('test debounce callback'))

afterEach(() => {
  jest.useFakeTimers()
})

test('debounced function reference', () => {
  expect(typeof debouncedFnRef).toBe('function')
})

test('debounce call once', () => {
  const CALL_TIMES = 10

  for (let i = 0; i < CALL_TIMES; i++) {
    debouncedFnRef()
  }

  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
})
