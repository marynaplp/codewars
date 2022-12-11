function arraySum(arr) {
    // sum ALL the things!
  return arr.flat(Infinity).filter(a=> typeof a==="number").reduce((acc, b)=>acc+b,0)
  }