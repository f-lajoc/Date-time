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

//to return month as name
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"June",
	"July",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec",
];
//to return days as name
const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

//DOM append
currentTimeEl.innerHTML = currentDate.toLocaleTimeString();
  //time append
hoursEl.innerHTML += " " + currentDate.getHours();
minutesEl.innerHTML += " " + currentDate.getMinutes();
secondsEl.innerHTML += " " + currentDate.getSeconds();

  //date append
currentYearEl.innerHTML += " " + currentDate.getFullYear();
currentMonthEl.innerHTML += " " + months[currentDate.getMonth()];
// currentDayEl.innerHTML += " " + currentDate.getDate();
currentWeekDayEl.innerHTML = " " + weekdays[currentDate.getDay()];

let day = currentDate.getDate();
if (day > 3 && day < 21) {
  currentDayEl.innerHTML += " " + currentDate.getDate() + "TH";
}