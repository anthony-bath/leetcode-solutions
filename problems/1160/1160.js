/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = function (words, chars) {
  let bank = [...chars].reduce((bank, char) => ({ ...bank, [char]: (bank[char] ?? 0) + 1 }), {});
  let length = 0;

  outer: for (const word of words) {
    let counts = {};

    for (const char of word) {
      if (!(char in bank)) continue outer;

      if (!(char in counts)) {
        counts[char] = 0;
      }

      counts[char]++;

      if (counts[char] > bank[char]) continue outer;
    }

    length += word.length;
  }

  return length;
};
