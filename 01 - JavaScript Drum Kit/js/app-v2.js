// v2
// Refactoring to more smaller functions.
// Each function is having a single responsibility.
// The code is more readable and easy to maintain.

window.addEventListener('keydown', handleKeyDown);

function handleKeyDown(e) {
    // Grab the key code.
    const keyCode = e.keyCode;

    // Check if it is a valid key code.
    if (!validKeyCode(keyCode)) {
        console.error('Invalid key pressed!');
        return;
    }

    // Animate key with this key code.
    animateKey(keyCode);

    // Play audio file linked to this key code.
    playAudio(keyCode);
}

function validKeyCode(keyCode) {
    const validKeyCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76];
    return validKeyCodes.includes(keyCode);
}

function animateKey(keyCode) {
    // Get key element with data-key = keyCode.
    const keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

    // Return an error if this is an invalid key.
    if (!keyElement) {
        console.error(`No key element found with data-key=${keyCode}`);
        return;
    }

    // Apply animation on key element.
    keyElement.classList.add('playing');
}

function playAudio(keyCode) {
    // Get an audio element with data-key = keyCode.
    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);

    // Return an error if no audio element found.
    if (!audioElement) {
        console.error(`No audio element found with data-key=${keyCode}`);
        return;
    }

    // Play this audio.
    audioElement.currentTime = 0; // Rewind to start
    audioElement.play();
}

// Remove 'playing' class after transition ends.
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', function(e) {
        if (e.propertyName !== 'transform') { // Only remove for transform transitions.
            return;
        }

        this.classList.remove('playing');
    });
});
