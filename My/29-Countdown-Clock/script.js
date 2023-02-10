let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
const resetTimerButton = document.getElementsByName("resetTimer")[0];
let isPaused = true;

function timer(seconds) {
    clearInterval(countdown);
    isPaused = false;
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;

    if(isPaused == false) {
        document.title = display;
        timerDisplay.textContent = display;
        console.log({minutes, remainderSeconds});
    } else {
        return;
    }
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    if(isPaused = false) {
        endTime.textContent = `Be back at ${hour}:${minutes < 10 ? "0" : ""}${minutes}`;
    } else {
        return;
    }
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

function resetTimer() {
    clearInterval(countdown);
    timerDisplay.textContent = "";
    endTime.textContent = "";
}

buttons.forEach(button => button.addEventListener("click", startTimer));

document.customForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
})

resetTimerButton.addEventListener("click", resetTimer);