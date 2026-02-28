/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = function (n) {
  const bin = n.toString(2);

  for (let i = 1; i < bin.length; i++) {
    if (bin[i] === bin[i - 1]) return false;
  }

  return true;
};
