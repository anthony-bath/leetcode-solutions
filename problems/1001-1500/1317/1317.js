/**
 * @param {number} n
 * @return {number[]}
 */
const getNoZeroIntegers = function (n) {
  const mid = Math.floor(n / 2);
  let [left, right] = [mid, mid];

  if (n % 2 === 1) right++;

  while (left > 0 && right < n) {
    if (!`${left}`.includes('0') && !`${right}`.includes('0')) {
      return [left, right];
    }

    left--;
    right++;
  }
};
