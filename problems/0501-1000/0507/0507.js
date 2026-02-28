/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = function (num) {
  if (num === 1) return false;
  let sum = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num;
};
