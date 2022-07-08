//gets Dad jokes from the API

const getJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "text/plain",
    },
  })
  const joke = await response.text()
  console.log(joke)
}

getJoke()
