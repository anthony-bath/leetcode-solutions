/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParityII = function (nums) {
  nums.sort((a, b) => {
    const aEven = a % 2 === 0;
    const bEven = b % 2 === 0;

    if (aEven && !bEven) {
      return -1;
    }

    if (bEven && !aEven) {
      return 1;
    }

    return 0;
  });

  const output = [];
  const mid = nums.length / 2;

  for (let even = 0, odd = mid; odd < nums.length; even++, odd++) {
    output.push(nums[even]);
    output.push(nums[odd]);
  }

  return output;
};
