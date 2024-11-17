/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
const isSumEqual = function (firstWord, secondWord, targetWord) {
  return toNumber(firstWord) + toNumber(secondWord) === toNumber(targetWord);
};

function toNumber(string) {
  return Number(
    string
      .split('')
      .map((x) => x.charCodeAt(0) - 97)
      .join('')
  );
}
