'use strict'

import gbToolkit from '../index'

test('range test', () => {
  expect(gbToolkit.range).toThrow(Error);
  expect(gbToolkit.range({ N: 10 })).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  expect(gbToolkit.range({ N: 5, start: 2, delta: 2 })).toStrictEqual([2, 4, 6, 8, 10])
  expect(gbToolkit.range({ N: 5, start: 3, delta: 3 })).toStrictEqual([3, 6, 9, 12, 15])
})
