/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function (moves) {
  let [x, y] = [0, 0];

  for (const move of moves) {
    if (move === 'R') {
      x += 1;
    } else if (move === 'D') {
      y -= 1;
    } else if (move === 'L') {
      x -= 1;
    } else {
      y += 1;
    }
  }

  return x === 0 && y === 0;
};
