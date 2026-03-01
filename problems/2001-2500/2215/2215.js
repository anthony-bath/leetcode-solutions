/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);

  for (const num of nums2) {
    if (nums1Set.has(num)) {
      nums1Set.delete(num);
      nums2Set.delete(num);
    }
  }

  return [Array.from(nums1Set), Array.from(nums2Set)];
};
