/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigits = function (n) {
  if (n === 0) return 1;

  let result = 10;
  let uniqueDigits = 9;
  let availableDigits = 9;

  while (n-- > 1 && availableDigits > 0) {
    uniqueDigits = uniqueDigits * availableDigits;
    result += uniqueDigits;
    availableDigits--;
  }

  return result;
};
