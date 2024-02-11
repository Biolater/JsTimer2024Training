let elapsedSeconds = 0;
let elapsedMinutes = 0
let intervalId = null;
const timerScreen = document.getElementById("timerDisplay");

const padStartSeconds = (value) => {
    return value < 10 ? String(value).padStart(2, "0") : String(value);
}
const padStartMinutes = (value) => {
    return value < 10 ? String(value).padStart(2, "0") : String(value);
}

const clearScreen = () => {
    elapsedSeconds = 0;
    elapsedMinutes = 0;
    timerScreen.innerText = `${padStartMinutes(elapsedMinutes)}:${padStartSeconds(elapsedSeconds)}`
}

const timer = () => {
    if(elapsedSeconds == 60){
        elapsedMinutes++;
        elapsedSeconds = 0;
    }
    elapsedSeconds++;
    timerScreen.innerText = `${padStartMinutes(elapsedMinutes)}:${padStartSeconds(elapsedSeconds)}`
}
const startTimer = () => {
    intervalId = setInterval(timer, 1000);
};
const stopTimer = () => {
    clearInterval(intervalId)
};
const resetTimer = () => {
    clearScreen()
    clearInterval(intervalId)
};