const { max, log2 } = Math;

/**
 * @param {number} n
 * @return {number}
 */
const binaryGap = function (n) {
  if (n === 0 || Number.isInteger(log2(n))) return 0;

  const groups = n
    .toString(2)
    .split('1')
    .map((group) => group.length);

  if (groups[groups.length - 1] !== 0) {
    groups.pop();
  }

  return 1 + max(...groups);
};
