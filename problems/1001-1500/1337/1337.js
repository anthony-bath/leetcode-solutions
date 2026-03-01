/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = function (mat, k) {
  return mat
    .map((row, i) => [row.filter((c) => c === 1).length, i])
    .sort(([s1, i1], [s2, i2]) => (s1 === s2 ? i1 - i2 : s1 - s2))
    .slice(0, k)
    .map(([_, i]) => i);
};
