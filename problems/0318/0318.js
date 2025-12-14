/**
 * @param {string[]} words
 * @return {number}
 */
const maxProduct = function (words) {
  const bins = Array(words.length);

  let best = 0;

  for (let i = 0; i < words.length; i++) {
    bins[i] = toBinary(words[i]);

    for (let j = i - 1; j >= 0; j--) {
      if ((bins[j] & bins[i]) === 0) {
        const res = words[i].length * words[j].length;
        best = res > best ? res : best;
      }
    }
  }

  return best;
};

function toBinary(word) {
  let result = 0;

  for (let i = 0; i < word.length; i++) {
    const bit = word.charCodeAt(i) - 97;
    result |= 1 << bit;
  }

  return result;
}
