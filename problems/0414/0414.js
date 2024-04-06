/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  let [max1, max2, max3] = [null, null, null];

  for (const num of nums) {
    if (num === max1 || num === max2 || num === max3) continue;

    if (max1 === null || num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (max2 === null || num > max2) {
      max3 = max2;
      max2 = num;
    } else if (max3 === null || num > max3) {
      max3 = num;
    }
  }

  return max3 !== null ? max3 : max1;
};
