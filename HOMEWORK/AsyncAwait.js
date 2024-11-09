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

async function orderPizza() {
  try {
    const message = await makePizza() // Waits for makePizza to complete
    console.log(message) // Logs "Pizza is ready!" if successful
    console.log("Yum! Eating the pizza!")
  } catch (error) {
    console.error(error) // Logs "Failed to make the pizza." if there is an error
  }
}

// Call the async function
orderPizza()
