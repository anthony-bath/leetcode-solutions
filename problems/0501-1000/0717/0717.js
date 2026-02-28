/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = function (bits) {
  let pos = 0;

  while (pos < bits.length) {
    if (bits[pos] === 0) {
      if (pos === bits.length - 1) {
        return true;
      }

      pos += 1;
    } else {
      if (pos === bits.length - 2) {
        return false;
      }

      pos += 2;
    }
  }
};
