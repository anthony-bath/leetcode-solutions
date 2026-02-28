const { abs } = Math;

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  const output = Array(nums);
  let [left, right] = [0, nums.length - 1];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (abs(nums[left]) >= abs(nums[right])) {
      output[i] = nums[left] ** 2;
      left++;
    } else {
      output[i] = nums[right] ** 2;
      right--;
    }
  }

  return output;
};
