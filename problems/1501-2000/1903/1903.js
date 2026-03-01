const evens = new Set(['0', '2', '4', '6', '8']);

/**
 * @param {string} num
 * @return {string}
 */
const largestOddNumber = function (num) {
  let right = num.length - 1;

  while (right >= 0 && evens.has(num[right])) {
    right--;
  }

  return num.substring(0, right + 1);
};
