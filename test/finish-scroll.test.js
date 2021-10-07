'use strict'

import gbToolkit from "../index"

afterEach(() => {
  jest.useRealTimers()
})

test('observe finish scroll', () => {
  // ref: custom event
  // https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events

  // ref: [Jest] jest.fn(), jest.spyOn() 함수 모킹
  // https://www.daleseo.com/jest-fn-spy-on/

  jest.useFakeTimers()

  const MOCK_CUSTOM_EVENT_NAME = 'mockScroll'
  const mockScrollEvent = new Event(MOCK_CUSTOM_EVENT_NAME)

  const mockFn = jest.fn()
  let mockScrollY = 0
  mockFn.mockImplementation(() => mockScrollY += 1)

  const elem = document.createElement('div') // todoc document 사용하려면 package.json test script에 jest --env=jsdom 옵션 붙여야 한다.
  elem.addEventListener('mockScroll', mockFn)

  const intervalMs = 10
  const timeoutMs = 1000
  const intervalId = setInterval(() => {
    elem.dispatchEvent(mockScrollEvent)

    setTimeout(() => {
      clearInterval(intervalId)
    }, timeoutMs)
  }, intervalMs)

  gbToolkit.finishScroll(50, { scrollY: mockScrollY }).then(res => {
    expect(res).toBe(gbToolkit.RES_SCROLL_FINISH)
  })

  jest.advanceTimersByTime(timeoutMs)

  expect(mockScrollY).toBe(timeoutMs / intervalMs)
})
