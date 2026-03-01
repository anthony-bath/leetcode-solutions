/**
 * @param {string} s
 * @return {string}
 */
const maximumOddBinaryNumber = function (s) {
  const ones = s.split('1').length - 1;
  const zeros = s.length - ones;

  return `${'1'.repeat(ones - 1)}${'0'.repeat(zeros)}1`;
};
