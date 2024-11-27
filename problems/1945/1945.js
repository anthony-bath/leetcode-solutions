/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLucky = function (s, k) {
  let result = BigInt(
    s
      .split('')
      .map((c) => c.charCodeAt(0) - 96)
      .join('')
  );

  for (let i = 0; i < k; i++) {
    result = sumDigits(result);
  }

  return Number(result);
};

function sumDigits(n) {
  let sum = 0n;

  while (n > 0n) {
    const rem = n % 10n;
    sum += rem;

    n = (n - rem) / 10n;
  }

  return sum;
}
