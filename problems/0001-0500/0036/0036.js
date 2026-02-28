const { floor } = Math;

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const colsSeen = Array.from({ length: 9 }, () => 0);
  const boxesSeen = Array.from({ length: 9 }, () => 0);

  for (let row = 0; row < 9; row++) {
    let rowSeen = 0;

    for (let col = 0; col < 9; col++) {
      const cell = board[row][col];
      if (cell === '.') continue;

      const bit = 1 << cell;
      if (rowSeen & bit) return false;
      rowSeen |= bit;

      if (colsSeen[col] & bit) return false;
      colsSeen[col] |= bit;

      const boxIndex = floor(row / 3) * 3 + floor(col / 3);
      if (boxesSeen[boxIndex] & bit) return false;
      boxesSeen[boxIndex] |= bit;
    }
  }

  return true;
};
