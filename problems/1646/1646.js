const { floor } = Math;

/**
 * @param {number} n
 * @return {number}
 */
const getMaximumGenerated = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let nums = Array(n + 1).fill(0);
  nums[1] = 1;

  let max = 1;

  for (let i = 2; i <= n; i++) {
    let half = floor(i / 2);

    if (i % 2 === 0) {
      nums[i] = nums[half];
    } else {
      nums[i] = nums[half] + nums[half + 1];
    }

    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
};
