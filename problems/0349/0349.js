/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  function intersect(s1, a2) {
    const output = new Set();

    for (const x of a2) {
      if (s1.has(x)) output.add(x);
    }

    return Array.from(output);
  }

  return intersect(new Set(nums1), nums2);
};
