const lookup = new Map();

for (let n = 6; n <= 1e5; n++) {
  let divisors = 2;
  let divisorSum = 1 + n;
  let root = Math.sqrt(n);

  for (let x = 2; x <= root; x++) {
    if (n % x === 0) {
      const div = n / x;
      const isSquare = x == div;

      divisors += isSquare ? 1 : 2;

      if (divisors > 4) {
        break;
      }

      divisorSum += x;
      divisorSum += isSquare ? 0 : div;
    }
  }

  if (divisors === 4) {
    lookup.set(n, divisorSum);
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function (nums) {
  let sum = 0;

  for (const num of nums) {
    if (lookup.has(num)) {
      sum += lookup.get(num);
    }
  }

  return sum;
};
