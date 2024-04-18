const { min } = Math;

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 1) return duration;

  let poisonDuration = duration; // last attack always goes full duration

  for (let i = 1; i < timeSeries.length; i++) {
    poisonDuration += min(duration, timeSeries[i] - timeSeries[i - 1]);
  }

  return poisonDuration;
};
