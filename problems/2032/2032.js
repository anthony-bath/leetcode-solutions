/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
const twoOutOfThree = function (nums1, nums2, nums3) {
  const output = new Map();
  const nums = [nums1, nums2, nums3];

  for (let i = 0; i <= nums.length; i++) {
    const set = new Set(nums[i]);

    for (const num of set) {
      const numSet = output.get(num) ?? new Set();
      numSet.add(i);
      output.set(num, numSet);
    }
  }

  return [...output.keys()].filter((k) => output.get(k).size >= 2);
};
