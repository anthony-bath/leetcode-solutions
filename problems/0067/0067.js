/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const aParts = a.split('').reverse();
  const bParts = b.split('').reverse();
  const result = [];

  let carry = 0;

  for (let position = 0; position < Math.max(a.length, b.length); position++) {
    const aValue = Number(aParts[position] ?? 0);
    const bValue = Number(bParts[position] ?? 0);

    const next = aValue + bValue + carry;

    if (next === 3) {
      result[position] = 1;
      carry = 1;
    } else if (next === 2) {
      result[position] = 0;
      carry = 1;
    } else {
      result[position] = next;
      carry = 0;
    }
  }

  if (carry) {
    result.push(1);
  }

  return result.reverse().join('');
};
