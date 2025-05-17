/**
 * @param {number} n
 * @return {boolean}
 */
const canAliceWin = function (n) {
  if (n < 10) return false;
  if (n === 10) return true;

  let move = 10;
  let turn = true;

  while (true) {
    if (move > n) {
      return !turn;
    }

    n -= move;
    move -= 1;
    turn = !turn;
  }
};
