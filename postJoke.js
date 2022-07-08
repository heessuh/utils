//post a joke to the API
const jokeObject = {
  id: "1",
  joke: "What is the hardest part about sky diving? The ground.",
}

const postJoke = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  })
  const data = await response.json()
  console.log(data.headers)
}

postJoke(jokeObject)
