
let startTime = 0;
let runTime = 0;
let timerInterval;
let isRunning = false;


function formatTime(time) {
  let hours = Math.floor(time / 3600000);
  let minutes = Math.floor((time - hours * 3600000) / 60000);
  let seconds = Math.floor((time - hours * 3600000 - minutes * 60000) / 1000);
  let milliseconds = Math.floor((time - hours * 3600000 - minutes * 60000 - seconds * 1000) / 10);

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (milliseconds < 10) {
    milliseconds = "0" + milliseconds;
  }

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}


function updateTimer() {
  let currentTime = new Date().getTime();
  runTime = currentTime - startTime;
  document.getElementById("timer").innerHTML = formatTime(runTime);
}


function startTimer() {
  if (!isRunning) {
    startTime = new Date().getTime() - runTime;
    timerInterval = setInterval(updateTimer, 10);
    isRunning = true;
  }
}


function stopTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}


function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById("timer").innerHTML = "00:00:00.00";
  runTime = 0;
  isRunning = false;
}