/**
 * @param {number[]} nums
 * @return {number}
 */
var scoreDifference = function (nums) {
  let player = nums[0] % 2;
  const scores = [0, 0];

  scores[player] += nums[0];

  for (let round = 1; round < nums.length; round++) {
    if (nums[round] % 2 === 1) player ^= 1;
    if ((round + 1) % 6 === 0) player ^= 1;

    scores[player] += nums[round];
  }

  return scores[0] - scores[1];
};
