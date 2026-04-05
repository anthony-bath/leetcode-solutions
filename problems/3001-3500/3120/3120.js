const State = {
  NONE: 0,
  LOWER: 1,
  UPPER: 2,
  BOTH: 3,
};

/**
 * @param {string} word
 * @return {number}
 */
const numberOfSpecialChars = function (word) {
  const counts = Array(26).fill(State.NONE);
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    let upper = false;
    let index = word.charCodeAt(i) - 97;

    if (index < 0) {
      upper = true;
      index += 32;
    }

    if (counts[index] === State.BOTH) continue;

    if (upper) {
      counts[index] |= State.UPPER;
    } else {
      counts[index] |= State.LOWER;
    }

    if (counts[index] === State.BOTH) {
      count += 1;
    }
  }

  return count;
};
