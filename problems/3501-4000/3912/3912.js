/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findValidElements = function (nums) {
  let frontmaxes = Array(nums.length);
  let backmaxes = Array(nums.length);
  let fm = nums[0];
  let bm = nums[nums.length - 1];

  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1 - i;

    if (nums[i] > fm) {
      fm = nums[i];
    }

    if (nums[j] > bm) {
      bm = nums[j];
    }

    frontmaxes[i] = fm;
    backmaxes[j] = bm;
  }

  return nums.filter(
    (n, i) => i === 0 || i === nums.length - 1 || n > frontmaxes[i - 1] || n > backmaxes[i + 1],
  );
};
