/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const findIntersectionValues = function (nums1, nums2) {
  const n1Set = new Set(nums1);
  const n2Set = new Set(nums2);
  const result = [0, 0];

  for (let i = 0; i < Math.max(nums1.length, nums2.length); i++) {
    if (n2Set.has(nums1[i])) {
      result[0]++;
    }

    if (n1Set.has(nums2[i])) {
      result[1]++;
    }
  }

  return result;
};
