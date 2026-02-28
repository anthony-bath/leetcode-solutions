/**
 * @param {character[][]} board
 * @return {number}
 */
const numRookCaptures = function (board) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if (board[row][col] !== 'R') continue;

      let captures = 0;

      let cRow = row - 1;

      while (cRow >= 0) {
        if (board[cRow][col] === '.') {
          cRow--;
          continue;
        }

        if (board[cRow][col] === 'B') break;

        if (board[cRow][col] === 'p') {
          captures += 1;
          break;
        }
      }

      cRow = row + 1;

      while (cRow < 8) {
        if (board[cRow][col] === '.') {
          cRow++;
          continue;
        }

        if (board[cRow][col] === 'B') {
          break;
        }

        if (board[cRow][col] === 'p') {
          captures += 1;
          break;
        }
      }

      let cCol = col - 1;

      while (cCol >= 0) {
        if (board[row][cCol] === '.') {
          cCol--;
          continue;
        }

        if (board[row][cCol] === 'B') break;

        if (board[row][cCol] === 'p') {
          captures += 1;
          break;
        }
      }

      cCol = col + 1;

      while (cCol < 8) {
        if (board[row][cCol] === '.') {
          cCol++;
          continue;
        }

        if (board[row][cCol] === 'B') break;

        if (board[row][cCol] === 'p') {
          captures += 1;
          break;
        }
      }

      return captures;
    }
  }
};
