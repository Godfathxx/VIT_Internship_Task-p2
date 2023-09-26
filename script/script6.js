function showDate() {
    var currentDate = new Date();
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var formattedDate =
      monthNames[currentDate.getMonth()] +
      " " +
      currentDate.getDate() +
      " " +
      currentDate.getFullYear();
    document.getElementById("dateResult").innerHTML = formattedDate;
    document.getElementById("timeResult").innerHTML = ""; // Clear the time result
  }
  function showTime() {
    var currentTime = new Date();
    var dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
      currentTime.getDay()
    ];
    var monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var formattedTime =
      dayOfWeek +
      " " +
      monthNames[currentTime.getMonth()] +
      " " +
      currentTime.getDate() +
      " " +
      currentTime.getFullYear() +
      " " +
      currentTime.toLocaleTimeString("en-US", {
        timeZoneName: "short",
        timeZone: "Asia/Kolkata", // Set the time zone to Indian Standard Time (IST)
      });
    document.getElementById("timeResult").innerHTML =
      formattedTime + " (Indian Standard Time)";
    document.getElementById("dateResult").innerHTML = ""; // Clear the date result
  }