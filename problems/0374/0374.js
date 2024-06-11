/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const { floor } = Math;

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  if (n === 1) return 1;
  if (n === 2) return guess(2) === 0 ? 2 : 1;

  let low = 1;
  let high = n;

  while (low <= high) {
    const mid = floor((low + high) / 2);
    const result = guess(mid);

    if (result === 0) {
      return mid;
    } else if (result === -1) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
};
