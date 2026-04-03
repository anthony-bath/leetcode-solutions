/**
 * @param {number} n
 * @return {number}
 */
const countMonobit = function (n) {
  let count = 1;
  let x = 1;

  while (x <= n) {
    count += 1;
    x = (x << 1) + 1;
  }

  return count;
};
