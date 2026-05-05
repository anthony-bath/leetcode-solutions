/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const largestInteger = function (nums, k) {
  const counts = Array(51).fill(0);
  let left = 0;

  while (left <= nums.length - k) {
    const uniques = new Set(nums.slice(left, left + k));

    for (const num of uniques) {
      counts[num]++;
    }

    left++;
  }

  for (let i = 50; i >= 0; i--) {
    if (counts[i] === 1) return i;
  }

  return -1;
};
