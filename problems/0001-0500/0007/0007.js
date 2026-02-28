/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  return doReverse(Math.abs(x)) * (x > 0 ? 1 : -1);
};

const MAX = 2 ** 31 - 1;

function doReverse(x) {
  let reversed = 0;
  let rem = 0;

  while (x !== 0) {
    rem = x % 10;
    x = Math.floor(x / 10);

    reversed = reversed * 10 + rem;

    if (reversed > MAX) return 0;
  }

  return reversed;
}
