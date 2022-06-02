//forEach with a callback function and an arrow function

const nums = [10, 20, 30, 40]
//traditional anonymous  function inside the forEach
/* nums.forEach(function(value, index) {
  console.log(value)
  console.log(index)
}) */

//arrow function inside the forEach
nums.forEach((value, index) => {
  console.log(value)
  console.log(index)
})

//basic function
function greeting() {
  console.log("hello")
}

//arrow function version of the above
const greeting2 = () => {
  console.log("hello")
}

greeting()
greeting2()
