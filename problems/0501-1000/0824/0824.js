/**
 * @param {string} sentence
 * @return {string}
 */
const toGoatLatin = function (sentence) {
  const startsWithVowelExpr = /^[aeiou]/i;

  return sentence
    .split(' ')
    .map((word, i) => {
      let translated = startsWithVowelExpr.test(word) ? word : `${word.substring(1)}${word[0]}`;
      return `${translated}ma${'a'.repeat(i + 1)}`;
    })
    .join(' ');
};
