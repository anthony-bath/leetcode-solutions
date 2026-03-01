/**
 * @param {number[][]} grid
 * @return {number}
 */
const findChampion = function (grid) {
  for (let team = 0; team < grid.length; team++) {
    const strength = grid[team].reduce((sum, num) => sum + num, 0);

    if (strength === grid.length - 1) {
      return team;
    }
  }
};
