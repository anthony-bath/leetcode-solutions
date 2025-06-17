/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  if (n % 10 === 0) return false;
  if (n >= 333) return false;

  const digits = new Set(`${n}`.split(''));

  if (digits.size < 3) return false;

  const n2 = n * 2;

  `${n2}`.split('').forEach(digits.add, digits);

  if (digits.size < 6) return false;

  const n3 = n * 3;
  `${n3}`.split('').forEach(digits.add, digits);

  return digits.size === 9 && !digits.has('0');
};
