/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
const countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
  const aStart = new Date(`${arriveAlice}-2025`);
  const aEnd = new Date(`${leaveAlice}-2025`);
  const bStart = new Date(`${arriveBob}-2025`);
  const bEnd = new Date(`${leaveBob}-2025`);

  const startMax = new Date(Math.max(aStart, bStart));
  const endMin = new Date(Math.min(aEnd, bEnd));

  if (startMax > endMin) return 0;

  return 1 + (endMin - startMax) / (24 * 60 * 60 * 1000);
};
