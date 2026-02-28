/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
  if (num < 10) return num;

  return addDigits(`${num}`.split('').reduce((sum, num) => sum + Number(num), 0));
};

/**
 * O(1) solution
 * const addDigits = function (num) {
 *   return 1 + (num - 1) % 9;
 * };
 */
