// Variable for buttons
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');


// variable for time value
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;


//leading zeros
let leadingMilliseconds = 0;
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;


// 
let timerInterval = null;
let timerStatus = "stopped";

// stop watch fuction

function stopWatch() {
 
    milliseconds++

    if (milliseconds / 100 === 1) {
        milliseconds = 0;
        seconds++
    }

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++
        }
    }

    if (leadingMilliseconds < 100) {
        leadingMilliseconds = milliseconds.toString();
    } else {
        leadingMilliseconds = milliseconds;
    }

    if (leadingSeconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if (leadingMinutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if (leadingHours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    let displayTimer = document.querySelector('#timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds + "." +leadingMilliseconds + "0";


}

// 
 
startStopBtn.addEventListener('click', function () {

    if (timerStatus === "stopped") {
       timerInterval = window.setInterval(stopWatch, 10);
        document.getElementById('startStopBtn').innerHTML = `<span id="pause">Pause</span>`;
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<span id="play">Start</span>`;
        timerStatus = "stopped";
    }
    
})  

resetBtn.addEventListener('click', function () {
    window.clearInterval(timerInterval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00.000"; 
})






