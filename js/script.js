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
currentTimeEl.innerText = currentDate.toLocaleTimeString();
hoursEl.innerText += " " + currentDate.getHours();
minutesEl.innerText += " " + currentDate.getMinutes();
secondsEl.innerText += " " + currentDate.getSeconds();

//date append
currentYearEl.innerText += " " + currentDate.getFullYear();
currentMonthEl.innerText += " " + months[currentDate.getMonth()];
currentWeekDayEl.innerText = " " + weekdays[currentDate.getDay()];

//to add 1st, 2nd, 3rd and nth to the dates
let day = currentDate.getDate();
if (day > 3 && day < 21) {
	currentDayEl.innerText += " " + currentDate.getDate() + "TH";
} else if (day % 10 == 1) {
	currentDayEl.innerText += " " + currentDate.getDate() + "ST";
} else if (day % 10 == 2) {
	currentDayEl.innerText += " " + currentDate.getDate() + "ND";
} else if (day == 3) {
	currentDayEl.innerText += " " + currentDate.getDate() + "RD";
}

//To change background based on time
function updateBackground() {
	const currentHour = currentDate.getHours();
	const body = document.body;

	if (currentHour >= 6 && currentHour < 18) {
		// Background for Daytime
		body.style.backgroundImage = "url('/images/morning.png')";
		body.style.textShadow = "2px 2px 4px black";
	} else {
		// Background for Nghttime
		body.style.backgroundImage = "url('/images/night.jpg')";
		body.style.textShadow = "2px 2px 4px black";
	}
}
updateBackground();
