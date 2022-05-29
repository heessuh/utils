const numbers = [10, -20, 30, -40, 50]

console.log(numbers.includes(10)) // true

console.log(numbers.some((num) => num > 0)) // true
console.log(numbers.every((num) => num > 0)) // false
