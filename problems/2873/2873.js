const { max } = Math;

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumTripletValue = function (nums) {
  let best = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const triplet = (nums[i] - nums[j]) * nums[k];

        if (triplet > best) {
          best = triplet;
        }
      }
    }
  }

  return max(0, best);
};
