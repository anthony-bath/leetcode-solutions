const { max, floor, log2 } = Math;

/**
 * @param {number} n
 * @return {number}
 */
const bitwiseComplement = function (n) {
  const pow = 1 + max(0, floor(log2(n)));

  return n ^ (2 ** pow - 1);
};

const { clz32 } = Math;

/**
 * @param {number} n
 * @return {number}
 */
const bitwiseComplementAlt = function (n) {
  const pow = n ? 32 - clz32(n) : 1;

  return n ^ (2 ** pow - 1);
};
