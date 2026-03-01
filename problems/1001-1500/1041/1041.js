const DIR = {
  NORTH: 0,
  EAST: 1,
  SOUTH: 2,
  WEST: 3,
};

const DELTAS = {
  [DIR.NORTH]: [0, -1],
  [DIR.EAST]: [1, 0],
  [DIR.SOUTH]: [0, 1],
  [DIR.WEST]: [-1, 0],
};

/**
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = function (instructions) {
  const robot = { x: 0, y: 0, dir: DIR.NORTH };

  for (const instruction of instructions) {
    switch (instruction) {
      case 'L':
        robot.dir = (robot.dir + 4 - 1) % 4;
        break;

      case 'R':
        robot.dir = (robot.dir + 1) % 4;
        break;

      case 'G':
        const [dx, dy] = DELTAS[robot.dir];

        robot.x += dx;
        robot.y += dy;
    }
  }

  return robot.dir !== DIR.NORTH || (robot.x === 0 && robot.y === 0);
};
