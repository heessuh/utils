/* const numbers = [10, 20, 30, 40, 50];

const copyOfNumbers = [...numbers];
console.log(copyOfNumbers); //
copyOfNumbers[0] = 100;
console.log(copyOfNumbers);//
console.log(numbers); */
//we made deep copy of the original by copying the values

/* const people = [{ name: "John" }, { name: "Jane" }];
people;
const copyOfPeople = [...people];
//copyOfPeople;
copyOfPeople[0].name = "Jack";
console.log(copyOfPeople);
console.log(people);  */

/* const numbers = [10, -20, 30, -40, 50];

const allPositive = numbers.filter((v) => v > 0);
console.log(allPositive);

const allNegative = numbers.filter((v) => v < 0);
console.log(allNegative);  */

/* const people = [{ name: "John" }, { name: "Ann" }];

const jPeople = people.filter(({ name }) => name.startsWith("J"));
console.log(jPeople); */ 

/* const first = [10, 20];
const second = [30, 40, 50]; */

//first.concat(second);

//const third = first.concat(second).map((v) => v * 10); 

/* const third = [...first, ...second].map((v) => v * 10);

console.log (third) */


/* const numbers = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];
const newnum = numbers.flat();
console.log(newnum); */

const deepNumbers = [[[[10, 20, 30]]], [[[40, 50, 60]]], [[[70, 80, 90]]]];
//deepNumbers.flat();
//deepNumbers.flat(2);
const newFred = deepNumbers.flat(Infinity);
console.log(newFred);



