/**
 * @param {number} num
 * @return {boolean}
 */
const isSameAfterReversals = (num) => {
  if (num < 10) return true;
  return num % 10 !== 0;
};
