const person = {
  name: "fred",
  age: 40,
  hello: function () {
    return "hello " + this.name
  },
}

console.log(person) // { name: 'fred', age: 40, hello: [Function: hello] }
console.log(person.hello()) // hello fred

console.log(typeof person) // object
console.log(typeof person.hello) //

const sendJson = JSON.stringify(person)
console.log(sendJson) // {"name":"fred","age":40} strips out the function from JSON

console.log(typeof sendJson) // string

const JsonPerson = JSON.parse(sendJson) // converts string to object
console.log(JsonPerson) // { name: 'fred', age: 40 }
