const progressBar = document.querySelector('.progress-bar');
const timer = document.querySelector('.timer');
let timeLimit = 30; // 30 seconds
let timePassed = 0;
let progress = 0;
let intervalId = null;

function startTimer() {
  intervalId = setInterval(() => {
    timePassed += 1;
    progress = (timePassed / timeLimit) * 376;
    progressBar.style.strokeDashoffset = 376 - progress;
    timer.textContent = timeLimit - timePassed;
    if (timePassed === timeLimit) {
      clearInterval(intervalId);
    }
  }, 1000);
}

startTimer();
