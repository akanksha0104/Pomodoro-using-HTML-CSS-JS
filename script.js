let timer;
let isPaused = true;
let minutes;
let seconds;
let workTime = 25;
let breakTime = 5;
let longBreakTime = 10;

function startTimer() {
    if (isPaused) {
        isPaused = false;
        timer = setInterval(updateTimer, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isPaused = true;
}

function resetTimer() {
    clearInterval(timer);
    isPaused = true;
    workTime = parseInt(document.getElementById('workTime').value, 10) || 25;
    breakTime = parseInt(document.getElementById('breakTime').value, 10) || 5;
    longBreakTime = parseInt(document.getElementById('longBreakTime').value, 10) || 10;
    updateDisplay(workTime, 0);
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        if (workTime === minutes) {
            updateDisplay(breakTime, 0);
        } else {
            updateDisplay(workTime, 0);
        }
        return;
    }

    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    updateDisplay(minutes, seconds);
}

function updateDisplay(min, sec) {
    minutes = min;
    seconds = sec;
    document.getElementById('timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

updateDisplay(workTime, 0);
