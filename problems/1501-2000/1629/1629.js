/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
const slowestKey = function (releaseTimes, keysPressed) {
  let maxDuration = releaseTimes[0];
  let maxKey = keysPressed[0];

  for (let i = 1; i < releaseTimes.length; i++) {
    const duration = releaseTimes[i] - releaseTimes[i - 1];

    if (duration > maxDuration) {
      maxKey = keysPressed[i];
      maxDuration = duration;
    } else if (duration === maxDuration) {
      maxKey = keysPressed[i] > maxKey ? keysPressed[i] : maxKey;
    }
  }

  return maxKey;
};
