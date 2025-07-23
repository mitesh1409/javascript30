// v1
// Initial version.

window.addEventListener('keydown', playSound);

function playSound(e) {
    const keyCode = e.keyCode;

    // Get the key element from the e.keyCode.
    const keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

    // Return an error if this is an invalid key.
    if (!keyElement) {
        console.error(`Key with key code ${keyCode} not set to produce any sound`);
        return;
    }

    // Apply animation on key element.
    keyElement.classList.add('playing');

    // Get an audio element with data-key = e.keyCode.
    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);

    // Return an error if no audio element found.
    if (!audioElement) {
        console.error(`No audio found for the key code ${e.keyCode}`);
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
