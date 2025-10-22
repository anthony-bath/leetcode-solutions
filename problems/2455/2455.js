const { floor } = Math;

/**
 * @param {number[]} nums
 * @return {number}
 */
const averageValue = function (nums) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 6 !== 0) continue;

    sum += nums[i];
    count++;
  }

  return count > 0 ? floor(sum / count) : 0;
};
