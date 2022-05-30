const nums: number[] = [1, 2, 3, 4, 5];
const numsTimes2: number[] = nums.map(num => num * 2);
console.log(numsTimes2);

const numsMixed = [-1, 2, -3, 4, -5];
const numsPositive = numsMixed.filter(num => num > 0);
console.log(numsPositive);

//chain filter and map
const numsPositive2 = numsMixed.filter(num => num > 0).map(num => num * 2);
console.log(numsPositive2);

//map and output object from primitive
const numsObj = nums.map(num => ({ value: num }));
console.log(numsObj);