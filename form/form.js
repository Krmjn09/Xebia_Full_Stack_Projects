document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault() // Prevent actual form submission

    // Get form values
    const fullName = document.getElementById("fullName").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value
    const gender = document.querySelector('input[name="gender"]:checked')
    const country = document.getElementById("country").value
    const terms = document.getElementById("terms").checked

    // Basic validation: Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    // Store user data in localStorage
    const user = {
      fullName: fullName,
      email: email,
      phone: phone,
      gender: gender ? gender.value : "",
      country: country,
    }

    localStorage.setItem("user", JSON.stringify(user))

    // Display summary
    displaySummary(fullName, email, phone, gender ? gender.value : "", country)
  })

// Display the summary
function displaySummary(fullName, email, phone, gender, country) {
  // Clear the current document and display the summary
  document.body.innerHTML = "<h1>Registration Summary</h1>"
  document.body.innerHTML +=
    "<p><strong>Full Name:</strong> " + fullName + "</p>"
  document.body.innerHTML += "<p><strong>Email:</strong> " + email + "</p>"
  document.body.innerHTML +=
    "<p><strong>Phone Number:</strong> " + phone + "</p>"
  document.body.innerHTML += "<p><strong>Gender:</strong> " + gender + "</p>"
  document.body.innerHTML += "<p><strong>Country:</strong> " + country + "</p>"
}
