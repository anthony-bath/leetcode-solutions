/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const minChanges = function (n, k) {
  if (n === k) return 0;
  if ((k & n) !== k) return -1;

  return countSetBits(k ^ n);
};

function countSetBits(n) {
  let count = 0;

  while (n) {
    count++;
    n &= n - 1; // Removes the lowest set bit
  }

  return count;
}
