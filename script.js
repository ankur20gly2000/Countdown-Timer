const startButton = document.getElementById('startButton');
const timeInput = document.getElementById('timeInput');
const countdownDisplay = document.getElementById('countdownDisplay');

let timer; // Declare timer in a scope accessible to startTimer

function startTimer() {
    let valueInSeconds = parseInt(timeInput.value);

    // Clear any existing interval before starting a new one
    clearInterval(timer);

    if (isNaN(valueInSeconds)) {
        countdownDisplay.innerText = 'Please enter a valid number';
        return;
    }

    if (valueInSeconds <= 0) {
        countdownDisplay.innerText = 'Please enter seconds > 0';
        return;
    }

    countdownDisplay.innerText = `Time remaining: ${valueInSeconds} seconds`;

    timer = setInterval(function () {
        valueInSeconds--;
        countdownDisplay.innerText = `Time remaining: ${valueInSeconds} seconds`;

        if (valueInSeconds <= 0) {
            clearInterval(timer);
            countdownDisplay.innerText = 'Time up ⏲️';
        }
    }, 1000);
}

startButton.addEventListener('click', startTimer);
