/**
 * @param {string[]} board
 * @return {boolean}
 */
const validTicTacToe = function (board) {
  let noughts = 0;
  let crosses = 0;
  let noughtsWin = false;
  let crossesWin = false;

  for (const row of board) {
    if (row === 'OOO') noughtsWin = true;
    else if (row === 'XXX') crossesWin = true;

    for (const square of row) {
      if (square === 'O') noughts++;
      else if (square === 'X') crosses++;
    }
  }

  if (noughts > crosses) return false;
  if (crosses - noughts > 1) return false;

  // Check other wins
  if (!noughtsWin && !crossesWin) {
    for (let x = 0; x < 3; x++) {
      let col = '';

      for (let y = 0; y < 3; y++) {
        col += board[y][x];
      }

      if (col === 'OOO') noughtsWin = true;
      else if (col === 'XXX') crossesWin = true;
    }
  }

  // Check diagonals win
  if (!noughtsWin && !crossesWin) {
    const diag1 = `${board[0][0]}${board[1][1]}${board[2][2]}`;
    const diag2 = `${board[0][2]}${board[1][1]}${board[2][0]}`;

    if (diag1 === 'OOO' || diag2 === 'OOO') noughtsWin = true;
    if (diag1 === 'XXX' || diag2 === 'XXX') crossesWin = true;
  }

  if (crossesWin) return !noughtsWin && crosses > noughts;
  if (noughtsWin) return !crossesWin && noughts === crosses;

  return true;
};
