/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const numberOfChild = function (n, k) {
  const traversals = Math.floor(k / (n - 1));
  const end = traversals % 2;
  const offset = k - traversals * (n - 1);

  if (end === 0) {
    return offset;
  } else {
    return n - 1 - offset;
  }
};
