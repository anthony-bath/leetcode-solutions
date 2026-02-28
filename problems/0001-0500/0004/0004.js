/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  let p1 = 0;
  let p2 = 0;

  let first = null;
  let second = null;
  const len = nums1.length + nums2.length;
  const target = 1 + (len >> 1);

  while (p1 < nums1.length || p2 < nums2.length) {
    second = first;

    if (nums1[p1] < nums2[p2] || p2 >= nums2.length) {
      first = nums1[p1++];
    } else {
      first = nums2[p2++];
    }

    if (p1 + p2 === target) {
      return len % 2 === 1 ? first : (first + second) / 2;
    }
  }
};
