/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getCommon = function (nums1, nums2) {
  let [i, j, m, n] = [0, 0, nums1.length, nums2.length];

  while (i < m && j < n) {
    if (nums1[i] === nums2[j]) {
      return nums1[i];
    }

    if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return -1;
};
