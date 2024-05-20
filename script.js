let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId;

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const millisecondsSpan = document.getElementById("milliseconds");

startBtn.addEventListener("click", () => {
	intervalId = setInterval(() => {
		milliseconds++;
		if (milliseconds === 100) {
			milliseconds = 0;
			seconds++;
			if (seconds === 60) {
				seconds = 0;
				minutes++;
				if (minutes === 60) {
					minutes = 0;
					hours++;
				}
			}
		}
		hoursSpan.textContent = hours.toString().padStart(2, "0");
		minutesSpan.textContent = minutes.toString().padStart(2, "0");
		secondsSpan.textContent = seconds.toString().padStart(2, "0");
		millisecondsSpan.textContent = milliseconds.toString().padStart(2, "0");
	}, 10);
});

stopBtn.addEventListener("click", () => {
	clearInterval(intervalId);
	intervalId = null;
});

resetBtn.addEventListener("click", () => {
	clearInterval(intervalId);
	intervalId = null;
	hours = 0;
	minutes = 0;
	seconds = 0;
	milliseconds = 0;
	hoursSpan.textContent = "00";
	minutesSpan.textContent = "00";
	secondsSpan.textContent = "00";
	millisecondsSpan.textContent = "00";
});