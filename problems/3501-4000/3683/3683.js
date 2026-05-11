/**
 * @param {number[][]} tasks
 * @return {number}
 */
const earliestTime = function (tasks) {
  return Math.min(...tasks.map(([start, end]) => start + end));
};
