/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
const finalPositionOfSnake = function (n, commands) {
  let [i, j] = [0, 0];

  for (const command of commands) {
    switch (command) {
      case 'UP':
        i--;
        break;
      case 'DOWN':
        i++;
        break;
      case 'RIGHT':
        j++;
        break;
      case 'LEFT':
        j--;
    }
  }

  return i * n + j;
};
