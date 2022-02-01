//sorts numbers in descending order

const numArray = [1, 100000, 23, 45, 6, 4500]

const numSortDesc = (array) => {
  if (!array.length) return
  return array.sort((a, b) => a - b).reverse()
}

console.log(numSortDesc(numArray))
