//an array within an object

const person = {
  name: "John",
  age: 30,
  cars: ["Ford", "BMW", "Fiat"],
}
console.log(person.cars[0]) //outputs the first car in the array Ford

//an object within an object
const person2 = {
  name: "Mary",
  age: 22,
  cars: { c1: "Ferrari", c2: "VW", c3: "Renault" },
}
console.log(person2.cars["c1"]) //outputs the Ferrari
