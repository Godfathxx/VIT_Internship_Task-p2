function multiply() {
    var num1 = parseFloat(document.getElementById("inputNum1").value);
    var num2 = parseFloat(document.getElementById("inputNum2").value);

    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").innerHTML =
        "Please enter valid numbers.";
    } else {
      var multiplication = num1 * num2;
      document.getElementById("result").innerHTML =
        "The result is: " + multiplication;
    }
  }

  function divide() {
    var num1 = parseFloat(document.getElementById("inputNum1").value);
    var num2 = parseFloat(document.getElementById("inputNum2").value);

    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").innerHTML =
        "Please enter valid numbers.";
    } else if (num2 === 0) {
      document.getElementById("result").innerHTML =
        "Division by zero is not allowed.";
    } else {
      var division = num1 / num2;
      document.getElementById("result").innerHTML =
        "The result is: " + division;
    }
  }