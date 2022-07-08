const requestJoke = async (first, last) => {
  const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${last}`)
  const data = await response.json()
  console.log(data.value.joke)
}

requestJoke("Fred", "Suh")
