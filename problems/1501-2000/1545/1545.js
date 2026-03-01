/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
const findKthBit = function (n, k) {
  if (n === 1) return '0';

  const mid = 2 ** (n - 1);

  if (k === mid) return '1';
  if (k < mid) return findKthBit(n - 1, k);

  const invertedK = 2 ** n - k;

  return findKthBit(n - 1, invertedK) === '0' ? '1' : '0';
};
