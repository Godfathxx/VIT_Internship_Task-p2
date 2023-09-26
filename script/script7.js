document
.getElementById("myForm")
.addEventListener("submit", function (event) {
  const inputFields = document.querySelectorAll(".form-control");

  inputFields.forEach(function (field) {
    field.classList.remove("error-input");
  });

  document.querySelectorAll(".error").forEach(function (errorElement) {
    errorElement.textContent = "";
  });

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const message = document.getElementById("message").value;

  if (name.trim() === "") {
    document.getElementById("nameError").textContent =
      "This field is required";
    document.getElementById("name").classList.add("error-input");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "A valid email address is required";
    document.getElementById("email").classList.add("error-input");
  }

  if (website.trim() === "") {
    document.getElementById("websiteError").textContent =
      "A valid URL is required";
    document.getElementById("website").classList.add("error-input");
  }

  if (message.trim() === "") {
    document.getElementById("messageError").textContent =
      "This field is required";
    document.getElementById("message").classList.add("error-input");
  }

  if (
    name.trim() === "" ||
    !emailPattern.test(email) ||
    website.trim() === "" ||
    message.trim() === ""
  ) {
    event.preventDefault();
  }
});