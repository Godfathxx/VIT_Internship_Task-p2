document.getElementById("submitBtn").addEventListener("click", function () {
    const inputFields = document.querySelectorAll(".form-control");

    // Reset styles for all input fields
    inputFields.forEach(function (field) {
        field.classList.remove("error-input");
    });

    document.querySelectorAll(".error").forEach(function (errorElement) {
        errorElement.textContent = "";
    });

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const hobbies = document.getElementById("hobbies").value;

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        document.getElementById("name").classList.add("error-input");
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        document.getElementById("email").classList.add("error-input");
    }

    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required";
        document.getElementById("password").classList.add("error-input");
    }

});