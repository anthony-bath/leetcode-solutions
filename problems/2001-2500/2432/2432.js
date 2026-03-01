/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
const hardestWorker = function (n, logs) {
  let [longestTask, minEmployeeId] = [0, null];
  let startTime = 0;

  for (let i = 0; i < logs.length; i++) {
    const [id, endTime] = logs[i];
    const duration = endTime - startTime;

    if (duration > longestTask) {
      longestTask = duration;
      minEmployeeId = id;
    } else if (duration === longestTask) {
      minEmployeeId = id < minEmployeeId ? id : minEmployeeId;
    }

    startTime = endTime;
  }

  return minEmployeeId;
};
