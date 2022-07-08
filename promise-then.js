const myPromise = new Promise((resolve, reject) => {
  const error = false
  if (!error) {
    resolve("Success")
  } else {
    reject("Error")
  }
})

console.log(myPromise)

myPromise
  .then((value) => {
    return value + 1
  })
  .then((newValue) => {
    console.log(newValue)
  })
  .catch((error) => {
    console.log(error)
  })

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise resolved")
  }, 3000)
})

myNextPromise.then((value) => {
  console.log(value)
})

myPromise.then((value) => {
  console.log(value)
})
//myNextPromise will print later than myPromise because it has setTimeout.
