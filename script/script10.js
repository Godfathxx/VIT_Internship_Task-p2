document
.getElementById("registerBtn")
.addEventListener("click", function (event) {
  const inputFields = document.querySelectorAll(
    "input[type='text'], input[type='email'], input[type='password'], input[type='number'], input[type='tel'], select, textarea"
  );

  inputFields.forEach(function (field) {
    field.classList.remove("error-input");
  });

  document.querySelectorAll(".error").forEach(function (errorElement) {
    errorElement.style.display = "none";
  });

  let hasErrors = false;

  inputFields.forEach(function (field) {
    if (field.value.trim() === "") {
      hasErrors = true;
      field.classList.add("error-input");
      const errorMessage = field.nextElementSibling;
      if (errorMessage && errorMessage.classList.contains("error")) {
        errorMessage.style.display = "inline";
      }
    }
  });

  if (hasErrors) {
    event.preventDefault();
  }
});