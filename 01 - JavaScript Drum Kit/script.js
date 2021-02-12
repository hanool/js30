function playSound(pressedKey) {
  const keyElem = getKeyElem(pressedKey);
  if (keyElem) {
    keyElem.classList.add("playing");
  }
  const sound = getAudio(pressedKey);
  if (sound) {
    sound.play();
  }
}

function pauseSound(pressedKey) {
  const keyElem = getKeyElem(pressedKey);
  if (keyElem) {
    keyElem.classList.remove("playing");
  }
  const sound = getAudio(pressedKey);
  if (sound) {
    sound.pause();
    sound.currentTime = 0;
  }
}

function handleKeyDown(e) {
  playSound(e.code);
}

function handleKeyUp(e) {
  pauseSound(e.code);
}

function handleMouseDown(e) {
  const pressedKey = e.target.getAttribute("data-key");
  playSound(pressedKey);
}

function handleMouseUp(e) {
  const pressedKey = e.target.getAttribute("data-key");
  pauseSound(pressedKey);
}

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);

document.querySelectorAll(`div[data-key]`).forEach((keyElem) => {
  keyElem.addEventListener("mousedown", handleMouseDown);
  keyElem.addEventListener("mouseup", handleMouseUp);
  keyElem.addEventListener("touchstart", handleMouseDown);
  keyElem.addEventListener("touchend", handleMouseUp);
});

/**
 * get AudioElement matching to the pressed key from document.
 * @param {String} pressedKey
 * @return DOMElement of audio.
 */
function getAudio(pressedKey) {
  return document.querySelector(`audio[data-key='${pressedKey}']`);
}

/**
 * get keyElement matching to the pressed key from window.
 * @param {String} pressedKey
 * @return keyElement in window.
 */
function getKeyElem(pressedKey) {
  return document.querySelector(`div[data-key='${pressedKey}']`);
}
