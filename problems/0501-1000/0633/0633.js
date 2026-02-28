const { floor, sqrt } = Math;

/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function (c) {
  let [left, right] = [0, floor(sqrt(c))];

  while (left <= right) {
    const sum = left * left + right * right;

    if (sum === c) return true;
    else if (sum > c) right--;
    else left++;
  }

  return false;
};
