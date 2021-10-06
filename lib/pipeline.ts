// https://ginnyang.notion.site/Pipeline-as-is-to-be-c5041e509d7943d4b05564314839077c

type TPipeSrc = number
type TPipeFn = (n: TPipeSrc) => TPipeSrc

const pipeline = (...fns: TPipeFn[]): TPipeFn => {
  return (input: TPipeSrc): TPipeSrc => {
    return fns.reduce((accum: TPipeSrc, fn: TPipeFn): TPipeSrc => fn(accum), input)
  }
}

export default pipeline
