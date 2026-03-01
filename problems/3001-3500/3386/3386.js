/**
 * @param {number[][]} events
 * @return {number}
 */
const buttonWithLongestTime = function (events) {
  let [key, max] = events[0];

  for (let i = 1; i < events.length; i++) {
    const diff = events[i][1] - events[i - 1][1];

    if (diff > max) {
      max = diff;
      key = events[i][0];
    } else if (diff === max) {
      key = Math.min(key, events[i][0]);
    }
  }

  return key;
};
