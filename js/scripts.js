const hourElement = document.getElementById('hour');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const dayOfWeekElement = document.getElementById('day-of-week');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const analogicClockHourElement = document.getElementById('analogic-clock-hour');
const analogicClockMinuteElement = document.getElementById(
	'analogic-clock-minute'
);
const analogicClockSecondElement = document.getElementById(
	'analogic-clock-second'
);

const months = [
	'enero',
	'febrero',
	'marzo',
	'abril',
	'mayo',
	'junio',
	'julio',
	'agosto',
	'septiembre',
	'octubre',
	'noviembre',
	'diciembre'
];

const daysWeek = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miércoles',
	'Jueves',
	'Viernes',
	'Sábado'
];

const digitalClock = () => {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();
	const dayWeek = date.getDay();
	const hour = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	const formattedHour = hour < 10 ? '0' + hour : hour;
	const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
	const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
	hourElement.textContent = formattedHour;
	minutesElement.textContent = formattedMinutes;
	secondsElement.textContent = formattedSeconds;
	dayOfWeekElement.textContent = daysWeek[dayWeek];
	dayElement.textContent = day;
	monthElement.textContent = months[month];
	yearElement.textContent = year;
};

setInterval(digitalClock, 1000);



const analogicClockHands = () => {
	const date = new Date();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();
	

	const hourRotation = (hour % 12) * 30 + (minute / 60) * 30;
	const minuteRotation = (minute / 60) * 360;
	const secondRotation = (second / 60) * 360;

	analogicClockHourElement.style.transform = `rotate(${hourRotation}deg)`;
	analogicClockMinuteElement.style.transform = `rotate(${minuteRotation}deg)`;
	analogicClockSecondElement.style.transform = `rotate(${secondRotation}deg)`;
};

setInterval(analogicClockHands, 1000);

digitalClock()
analogicClockHands()