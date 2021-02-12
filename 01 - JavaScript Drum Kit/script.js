document.querySelectorAll("audio").forEach((audio) => {
  audio.volume = 0.1;
});

window.addEventListener("keydown", (e) => {
  const keyElem = getKeyElem(e.code);
  if (keyElem) {
    keyElem.classList.add("playing");
  }
  const sound = getAudio(e.code);
  if (sound) {
    sound.play();
  }
});

window.addEventListener("keyup", (e) => {
  const keyElem = getKeyElem(e.code);
  if (keyElem) {
    keyElem.classList.remove("playing");
  }
  const sound = getAudio(e.code);
  if (sound) {
    sound.pause();
    sound.currentTime = 0;
  }
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
