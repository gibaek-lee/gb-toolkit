'use strict'

import gbToolkit from "../index"

test('pipeline flow', () => {
  const input = 1

  const pipeFn1 = v => v + 1
  const pipeFn2 = v => v + 2
  const pipeFn3 = v => v + 3

  const flowResult = gbToolkit.pipeline(pipeFn1, pipeFn2, pipeFn3)(input)

  expect(typeof flowResult).toBe(typeof input)
  expect(flowResult).toBe(7)
})
