// v1
// Initial version.

// Run clock every second.
setInterval(runClock, 1000);

const secondHand = document.querySelector('div[class="hand second-hand"]');
const minHand = document.querySelector('div[class="hand min-hand"]');
const hourHand = document.querySelector('div[class="hand hour-hand"]');

function runClock() {
    // Get current time.
    const currentTime = new Date();

    // Get seconds value.
    const seconds = currentTime.getSeconds();
    // Update seconds hand position.
    secondHand.style.transform = `rotate(${(seconds * (360 / 60))+90}deg)`;

    // Get minutes value.
    const minutes = currentTime.getMinutes();
    // Update minutes hand position.
    minHand.style.transform = `rotate(${(minutes * (360 / 60))+90}deg)`;

    // Get hours value.
    const hours = currentTime.getHours();
    // Update hours hand position.
    hourHand.style.transform = `rotate(${(hours * (360 / 12))+90}deg)`;
}
