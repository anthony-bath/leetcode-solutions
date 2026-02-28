const { min } = Math;

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const m1 = convertToMap(nums1);
  const m2 = convertToMap(nums2);

  const result = [];

  for (const [n, c1] of m1) {
    const c2 = m2.get(n);
    if (c2) {
      result.push(...Array(min(c1, c2)).fill(n));
    }
  }

  return result;
};

function convertToMap(nums) {
  const m = new Map();

  for (const n of nums) {
    if (m.has(n)) {
      m.set(n, m.get(n) + 1);
    } else {
      m.set(n, 1);
    }
  }

  return m;
}
