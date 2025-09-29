const PRIMES = new Set([2, 3, 5, 7, 11, 13, 17, 19]);

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const countPrimeSetBits = function (left, right) {
  let count = 0;

  for (let num = left; num <= right; num++) {
    const setBits = countSetBits(num);

    if (PRIMES.has(setBits)) {
      count++;
    }
  }

  return count;
};

function countSetBits(n) {
  let count = 0;

  while (n) {
    count++;
    n &= n - 1; // Removes the lowest set bit
  }

  return count;
}
