/**
 * @param {number[][]} nums
 * @return {number}
 */
const matrixSum = function (nums) {
  nums.forEach((row) => row.sort((a, b) => b - a));

  let score = 0;
  const rounds = nums[0].length;

  for (let i = 0; i < rounds; i++) {
    let max = 0;

    for (const row of nums) {
      const next = row[i];

      if (next > max) {
        max = next;
      }
    }

    score += max;
  }

  return score;
};
