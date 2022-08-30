//filtering numbers
const numbers = [10, -20, 30, -40, 50];

const allPositive = numbers.filter((v) => v > 0);

console.log (allPositive);

const allNegative = numbers.filter((v) => v < 0);

console.log (allNegative);
