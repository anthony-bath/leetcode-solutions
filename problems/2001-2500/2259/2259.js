/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
const removeDigit = function (number, digit) {
  for (let i = 0; i < number.length - 1; i++) {
    if (number[i] === digit && number[i + 1] > digit) {
      return number.substring(0, i) + number.substring(i + 1);
    }
  }

  for (let i = number.length - 1; i >= 0; i--) {
    if (number[i] === digit) {
      return number.substring(0, i) + number.substring(i + 1);
    }
  }
};
