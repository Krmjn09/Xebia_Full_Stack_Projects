//callback function
function makeAlert(callback) {
  console.log("Alert")
  setTimeout(() => {
    console.log("ohh")
    callback()
  }, 2000)
}

function alertFunction() {
  console.log("Alert Function")
}

makeAlert(alertFunction)
