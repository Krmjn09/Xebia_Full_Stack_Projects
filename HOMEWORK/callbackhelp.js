function makePizza(callback) {
  console.log("Making your pizza...")

  setTimeout(() => {
    console.log("Pizza is ready!")
    callback(null, "Yum! Eating the pizza!") // Call the callback with no error and a success message
  }, 2000) // Simulates the time it takes to make the pizza (2 seconds)
}

function handlePizzaCompletion(error, message) {
  if (error) {
    console.error("There was an error:", error)
  } else {
    console.log(message) // Logs the success message
  }
}

// Call makePizza and pass handlePizzaCompletion as the callback function
makePizza(handlePizzaCompletion)
