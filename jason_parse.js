const myJSON = '{"name":"John", "age":30, "car":null}'
const myObj = JSON.parse(myJSON)

//console.log(myObj)

let text = ""
for (const x in myObj) {
  text += x + ", "
}
console.log(text) //outputs the object's properties as a string name, age, car

const myJSON2 = '{"name":"John", "age":30, "car":null}'
const myObj2 = JSON.parse(myJSON2)

let text2 = ""
for (const x in myObj2) {
  text2 += myObj2[x] + ", "
}
console.log(text2) //outputs the object's property values as a string John, 30, null
