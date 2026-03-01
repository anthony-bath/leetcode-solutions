/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
const canBeTypedWords = function (text, brokenLetters) {
  const expr = new RegExp(`[${brokenLetters}]`);
  return text.split(' ').filter((word) => !expr.test(word)).length;
};
