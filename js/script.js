 const currentDate = new Date();
// DOM fetch
const currentTimeEl = document.getElementById("currentTime");
  //date
let currentYearEl = document.getElementById("currentYear");
let currentMonthEl = document.getElementById("currentMonth");
let currentDayEl = document.getElementById("currentDay");
let currentWeekDayEl = document.getElementById("currentWeekDay");

  //time
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

//DOM append
currentTimeEl.innerHTML = currentDate.toLocaleTimeString();
  //time append
hoursEl.innerHTML += ": " + currentDate.getHours();
minutesEl.innerHTML += ": " + currentDate.getMinutes();
secondsEl.innerHTML += ": " + currentDate.getSeconds();

  //date append
currentYearEl.innerHTML += ": " + currentDate.getFullYear();
currentMonthEl.innerHTML += ": " + currentDate.months[getFullYear()];
currentDayEl.innerHTML += ": " + currentDate.getFullYear();
currentWeekDayEl.innerHTML += ": " + currentDate.getFullYear();