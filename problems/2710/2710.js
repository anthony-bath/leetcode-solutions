/**
 * @param {string} num
 * @return {string}
 */
const removeTrailingZeros = function (num) {
  let right = num.length - 1;

  while (num[right] === '0') {
    right--;
  }

  return num.substring(0, right + 1);
};
