//find most common string in array

const arrayOfStrings = ['one', 'two', '3', 'one', 'one', 'two', 'one', 'one', 'two']

const findStringInArray = (array) => {
  if (!array.length) return

  const countItem = {}
  array.forEach((item) => {
    countItem[item] ? (countItem[item] += 1) : (countItem[item] = 1)
  })
}

console.log(findStringInArray(arrayOfStrings))
