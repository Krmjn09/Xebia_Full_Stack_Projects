async function fetchPizzaData() {
  try {
    // Fetch data from a public API (placeholder API for demo purposes)
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")

    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }

    // Parse the response data as JSON
    const data = await response.json()

    // Log the data
    console.log(data)
  } catch (error) {
    console.error("There was an error fetching the data:", error)
  }
}

// Call the function
fetchPizzaData()
