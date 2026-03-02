/**
 * @param {number[]} nums
 * @return {number}
 */
const maxWidthRamp = function (nums) {
  const stack = [0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[stack.at(-1)]) {
      stack.push(i);
    }
  }

  let result = 0;

  for (let j = nums.length - 1; j >= 0; j--) {
    while (stack.length && nums[stack.at(-1)] <= nums[j]) {
      const i = stack.pop();
      result = Math.max(result, j - i);
    }

    if (stack.length === 0) break;
  }

  return result;
};
