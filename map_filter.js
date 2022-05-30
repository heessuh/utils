var nums = [1, 2, 3, 4, 5];
var numsTimes2 = nums.map(function (num) { return num * 2; });
console.log(numsTimes2);
var numsMixed = [-1, 2, -3, 4, -5];
var numsPositive = numsMixed.filter(function (num) { return num > 0; });
console.log(numsPositive);
//chain filter and map
var numsPositive2 = numsMixed.filter(function (num) { return num > 0; }).map(function (num) { return num * 2; });
console.log(numsPositive2);
//map and output object from primitive
var numsObj = nums.map(function (num) { return ({ value: num }); });
console.log(numsObj);
