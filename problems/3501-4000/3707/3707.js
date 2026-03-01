/**
 * @param {string} s
 * @return {boolean}
 */
const scoreBalance = function (s) {
  let sum = [...s].reduce((sum, c) => sum + c.charCodeAt(0) - 96, 0);

  if (sum % 2 === 1) return false;

  let currentSum = 0;

  for (let i = 0; i < s.length; i++) {
    currentSum += s.charCodeAt(i) - 96;

    if (currentSum === sum / 2) return true;
    if (currentSum > sum / 2) break;
  }

  return false;
};
