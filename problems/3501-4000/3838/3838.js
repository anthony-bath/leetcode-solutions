/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
const mapWordWeights = function (words, weights) {
  return words
    .map((word) => {
      let weight = 0;

      for (let i = 0; i < word.length; i++) {
        weight += weights[word.charCodeAt(i) - 97];
      }

      const letter = 25 - (weight % 26) + 97;
      return String.fromCharCode(letter);
    })
    .join('');
};
