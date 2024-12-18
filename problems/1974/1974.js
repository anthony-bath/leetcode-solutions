/**
 * @param {string} word
 * @return {number}
 */
const minTimeToType = function (word) {
  let time = 0;

  for (let position = 0; position < word.length; position++) {
    let prev = position > 0 ? word.charCodeAt(position - 1) - 97 : 0;
    let curr = word.charCodeAt(position) - 97;

    if (curr > prev) {
      time += Math.min(curr - prev, prev + (26 - curr));
    } else if (prev > curr) {
      time += Math.min(prev - curr, curr + (26 - prev));
    }

    time += 1; // to type it
  }

  return time;
};
