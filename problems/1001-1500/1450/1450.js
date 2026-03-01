/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
const busyStudent = function (startTime, endTime, queryTime) {
  return startTime.filter((start, i) => endTime[i] >= queryTime && start <= queryTime).length;
};
