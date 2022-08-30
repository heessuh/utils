//async await example using fake api

const myUsers = {
  userList: [],
}

/* const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  return data
}

getUsers() */
/* const anotherFunc = async () => {
  const users = await getUsers()
  myUsers.userList = users
  console.log(myUsers)
} */

//anotherFunc()

//console.log(myUsers.userList) //this will be executed before line 16 in anotherFunc() bc it is awaiting the response from the fetch call

const getUserEmail = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  const userEmail = data.map((user) => user.email)
  // console.log first 3 emails

  console.log(userEmail.slice(0, 5))
}

getUserEmail()
