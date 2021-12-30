let clockH = document.querySelector('.clock__hours');
let clockM = document.querySelector('.clock__minutes');
let clockS = document.querySelector('.clock__seconds');
let countdownHours = document.querySelector('.countdown__hours');
let countdownMinutes = document.querySelector('.countdown__minutes');
let countdownSeconds = document.querySelector('.countdown__seconds');

let startClock = () => {
    recordTime();
    setInterval(() => {
        recordTime();
    }, 1000);
}

let addzeros = (number) => {
    if (number < 10) {
        number = "0"+number;
        return number
    } else{
        return number;
    }
}

let recordTime = () => {
    let now = new Date();
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    clockH.style.transform = `rotate(${360 / 12 * hours}deg)`;
    clockM.style.transform = `rotate(${360 / 60 * minutes}deg)`;
    clockS.style.transform = `rotate(${360 / 60 * seconds}deg)`;

    countdownHours.textContent = addzeros(now.getHours());
    countdownMinutes.textContent = addzeros(minutes);
    countdownSeconds.textContent = addzeros(seconds);
}

startClock();