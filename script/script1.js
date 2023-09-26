document.getElementById("sendButton").addEventListener("click", function () {

    document.querySelectorAll(".error").forEach(function (errorElement) {
        errorElement.textContent = "";
    });
    document.querySelectorAll(".error-input").forEach(function (errorInput) {
        errorInput.style.border = "0.5px solid black";
    });
    document.querySelectorAll("label").forEach(function (label) {
        label.style.color = "#000";
    });
    document.querySelectorAll(".bi").forEach(function (icon) {
        icon.style.color = "#000";
    });

    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const hostingYes = document.getElementById("hostingYes").checked;
    const hostingNo = document.getElementById("hostingNo").checked;
    const projectDescription = document.getElementById("project_description").value;

    if (firstName === "") {
        document.getElementById("firstnameError").textContent = "Please supply your first name";
        document.getElementById("firstname").parentNode.style.border = "0.5px solid red"; 
        document.getElementById("firstnameLabel").style.color = "red"; 
        document.getElementById("firstnameIcon").style.color = "red"; 
        

    }

    if (lastName === "") {
        document.getElementById("lastnameError").textContent = "Please supply your last name";
        document.getElementById("lastname").parentNode.style.border = "0.5px solid red";
        document.getElementById("lastnameLabel").style.color = "red";
        document.getElementById("lastnameIcon").style.color = "red";
        
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Please supply your email address";
        document.getElementById("email").parentNode.style.border = "0.5px solid red";
        document.getElementById("emailLabel").style.color = "red";
        document.getElementById("emailIcon").style.color = "red";
        
    }

    if (phone === "") {
        document.getElementById("phoneError").textContent = "Please supply your phone number";
        document.getElementById("phone").parentNode.style.border = "0.5px solid red";
        document.getElementById("phoneLabel").style.color = "red";
        document.getElementById("phoneIcon").style.color = "red";
        
    }

    if (address === "") {
        document.getElementById("addressError").textContent = "Please supply your street address";
        document.getElementById("address").parentNode.style.border = "0.5px solid red";
        document.getElementById("addressLabel").style.color = "red";
        document.getElementById("addressIcon").style.color = "red";
        
    }

    if (city === "") {
        document.getElementById("cityError").textContent = "Please supply your city";
        document.getElementById("city").parentNode.style.border = "0.5px solid red";
        document.getElementById("cityLabel").style.color = "red";
        document.getElementById("cityIcon").style.color = "red";
        
    }

    if (state === "Select a state...") {
        document.getElementById("stateError").textContent = "Please select your state";
        document.getElementById("state").parentNode.style.border = "0.5px solid red";
        document.getElementById("stateLabel").style.color = "red";
        document.getElementById("stateIcon").style.color = "red";
        ;
    }

    if (!hostingYes && !hostingNo) {
        document.getElementById("hostingError").textContent = "Please select an option";
        document.getElementById("hostingLabel").style.color = "red";
    }

    if (projectDescription === "") {
        document.getElementById("projectDescriptionError").textContent = "Please supply your project description";
        document.getElementById("project_description").parentNode.style.border = "0.5px solid red";
        document.getElementById("projectDescriptionLabel").style.color = "red";
        document.getElementById("projectDescriptionIcon").style.color = "red";
        
    }
    const sendButton = document.getElementById("sendButton");
    sendButton.style.backgroundColor = "grey"; 
    sendButton.style.color = "darkgrey"; 
    sendButton.style.boxShadow = "inset 0 0 10px darkgrey";
    document.querySelector(".bi-send-fill").style.color = "darkgrey"; 
});