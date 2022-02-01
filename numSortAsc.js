//sorts numbers in ascending order

const numArray = [1, 100000, 23, 45, 6, 4500]

const numSortAsc = (array) => {
  if (!array.length) return
  return array.sort((a, b) => a - b)
}

console.log(numSortAsc(numArray))
