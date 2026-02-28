/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  const n1 = nums1.slice(0, m);

  for (let i = 0; i < m + n; i++) {
    if (n1.length === 0) {
      nums1[i] = nums2.shift();
      continue;
    }

    if (nums2.length === 0) {
      nums1[i] = n1.shift();
      continue;
    }

    if (n1[0] < nums2[0]) {
      nums1[i] = n1.shift();
    } else if (nums2[0] < n1[0]) {
      nums1[i] = nums2.shift();
    } else {
      nums1[i] = n1.shift();
    }
  }
};
