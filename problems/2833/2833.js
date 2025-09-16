const { abs, max } = Math;

/**
 * @param {string} moves
 * @return {number}
 */
const furthestDistanceFromOrigin = function (moves) {
  let [lPos, rPos] = [0, 0];

  for (const move of moves) {
    switch (move) {
      case '_':
        lPos--;
        rPos++;
        break;

      case 'L':
        lPos--;
        rPos--;
        break;

      case 'R':
        lPos++;
        rPos++;
    }
  }

  return max(abs(lPos), abs(rPos));
};
