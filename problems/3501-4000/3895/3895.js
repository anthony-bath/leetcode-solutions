/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
const countDigitOccurrences = function (nums, digit) {
  let count = 0;

  for (let num of nums) {
    while (num > 0) {
      const d = num % 10;

      if (d === digit) {
        count += 1;
      }

      num = (num - d) / 10;
    }
  }

  return count;
};
