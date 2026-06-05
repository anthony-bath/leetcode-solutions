/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function (n) {
  return `${n}`.split('').reduce((sum, digit) => sum + Number(digit), 0);
};
