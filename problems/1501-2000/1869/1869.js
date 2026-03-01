/**
 * @param {string} s
 * @return {boolean}
 */
const checkZeroOnes = function (s) {
  let [currZero, currOne, maxZero, maxOne] = [0, 0, 0, 0];

  for (const bit of s) {
    if (bit === '0') {
      currOne = 0;
      currZero++;

      if (currZero > maxZero) {
        maxZero = currZero;
      }
    } else {
      currZero = 0;
      currOne++;

      if (currOne > maxOne) {
        maxOne = currOne;
      }
    }
  }

  return maxOne > maxZero;
};
