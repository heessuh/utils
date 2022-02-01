//sorts alpha numeric string in ascending order

const alphaNumArray = [1, 'Batman', 'Spiderman', 100000, 23, 'Black Panther', 45, 6, 4500]

const alphaNumSort = (array) => {
  if (!array.length) return
  const numArray = []
  const alphaArray = []
  array.forEach((item) => {
    isNaN(item) ? alphaArray.push(item) : numArray.push(item)
  })
  alphaArray.sort()
  numArray.sort((a, b) => a - b)
  return [...numArray, ...alphaArray]
}

console.log(alphaNumSort(alphaNumArray))
