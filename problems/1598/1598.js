/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = function (logs) {
  let depth = 0;

  for (const log of logs) {
    switch (true) {
      case log.startsWith('..'):
        depth = Math.max(0, depth - 1);
        break;

      case log.startsWith('.'):
        break;

      default:
        depth += 1;
    }
  }

  return depth;
};
