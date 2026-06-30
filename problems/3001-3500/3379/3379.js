const { abs } = Math;

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const constructTransformedArray = function (nums) {
  const n = nums.length;
  const result = Array(n);

  for (let i = 0; i < nums.length; i++) {
    const target = (((i + nums[i]) % n) + n) % n;
    result[i] = nums[target];
  }

  return result;
};
