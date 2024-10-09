// script.js
const nameInput = document.getElementById("name")
const password = document.getElementById("password")
const confirm = document.getElementById("confirm")
const message = document.getElementById("message")
const passwordValidation = document.getElementById("passwordValidation")
const nameValidation = document.getElementById("nameValidation")
const userData = document.getElementById("userData")
const form = document.getElementById("myForm")

// Function to validate name
function validateName() {
  if (nameInput.value.trim() === "") {
    nameValidation.textContent = "Name cannot be empty"
    return false
  } else {
    nameValidation.textContent = ""
    return true
  }
}

// Function to validate password rules
function validatePasswordRules() {
  const passwordValue = password.value
  const hasUpperCase = /[A-Z]/.test(passwordValue)
  const hasLowerCase = /[a-z]/.test(passwordValue)
  const hasMinLength = passwordValue.length >= 8 && passwordValue.length <= 15

  if (hasUpperCase && hasLowerCase && hasMinLength) {
    passwordValidation.textContent = "Password is valid!"
    passwordValidation.classList.add("success-message")
    passwordValidation.classList.remove("error-message", "info-message")
    return true
  } else {
    passwordValidation.textContent =
      "Password must be 8-15 characters, including uppercase and lowercase letters."
    passwordValidation.classList.add("error-message")
    passwordValidation.classList.remove("success-message", "info-message")
    return false
  }
}

// Function to validate if passwords match
function validatePasswordMatch() {
  if (password.value !== confirm.value) {
    message.textContent = "Passwords do not match!"
    message.classList.add("error-message")
    message.classList.remove("success-message")
    return false
  } else {
    message.textContent = "Passwords match!"
    message.classList.add("success-message")
    message.classList.remove("error-message")
    return true
  }
}

// Event listeners for real-time validation
nameInput.addEventListener("input", validateName)
password.addEventListener("input", () => {
  validatePasswordRules()
  validatePasswordMatch()
})
confirm.addEventListener("input", validatePasswordMatch)

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault() // Prevent form submission

  // Validate everything
  const isNameValid = validateName()
  const isPasswordValid = validatePasswordRules()
  const isPasswordMatch = validatePasswordMatch()

  // If all validations pass, store data in localStorage
  if (isNameValid && isPasswordValid && isPasswordMatch) {
    const user = {
      name: nameInput.value,
      password: password.value,
    }

    // Store user data in localStorage
    localStorage.setItem("user", JSON.stringify(user))

    // Display user data on the page
    displayUserData(user)
  } else {
    alert("Please correct the errors and try again.")
  }
})

// Function to display user data after submission
function displayUserData(user) {
  const maskedPassword = "*".repeat(user.password.length) // Mask the password
  userData.innerHTML = `
    <p>Name: ${user.name}</p>
    <p>Password: ${maskedPassword}</p>
  `
}

// If there's already user data in localStorage, display it
const storedUser = JSON.parse(localStorage.getItem("user"))
if (storedUser) {
  displayUserData(storedUser)
}
