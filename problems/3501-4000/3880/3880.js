/**
 * @param {number[]} nums
 * @return {number}
 */
const minAbsoluteDifference = function (nums) {
  let best = Infinity;
  let last1 = null;
  let last2 = null;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (last2 !== null) {
        const diff = i - last2;

        if (diff < best) {
          best = diff;
        }
      }

      last1 = i;
    } else if (nums[i] === 2) {
      if (last1 !== null) {
        const diff = i - last1;

        if (diff < best) {
          best = diff;
        }
      }

      last2 = i;
    }

    if (best === 1) return 1;
  }

  return best < Infinity ? best : -1;
};
