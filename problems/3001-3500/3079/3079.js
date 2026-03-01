/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfEncryptedInt = function (nums) {
  let sum = 0;

  for (const num of nums) {
    if (num < 10) {
      sum += num;
    } else if (num < 100) {
      const a = ~~(num / 10);
      const b = num % 10;
      sum += Math.max(a, b) * 11;
    } else if (num < 1000) {
      const a = ~~(num / 100);
      const b = ~~((num % 100) / 10);
      const c = num % 10;
      sum += Math.max(a, b, c) * 111;
    } else {
      sum += 1111;
    }
  }

  return sum;
};
