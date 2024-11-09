function makePizza() {
  return new Promise((resolve, reject) => {
    console.log("Making your pizza...")

    setTimeout(() => {
      const success = true // Change this to `false` to simulate a failure.

      if (success) {
        resolve("Pizza is ready!")
      } else {
        reject("Failed to make the pizza.")
      }
    }, 2000) // Simulates the time it takes to make the pizza (2 seconds)
  })
}

// Using the Promise
makePizza()
  .then((message) => {
    console.log(message) // Logs "Pizza is ready!" if resolved
    console.log("Yum! Eating the pizza!")
  })
  .catch((error) => {
    console.error(error) // Logs "Failed to make the pizza." if rejected
  })
