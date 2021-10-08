interface IRangeParam {
  N: number
  start: number
  delta: number
}

const range = ({ N, start = 0, delta = 1 }: IRangeParam): number[] => {
  if (N === undefined) {
    throw new Error('N is not defined')
  }

  const rangeArray: number[] = []
  for(let i = 0; i < N; i++) {
    rangeArray.push(start + i * delta)
  }

  return rangeArray
}

export default range
