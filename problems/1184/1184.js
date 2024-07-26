/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
const distanceBetweenBusStops = function (distance, start, destination) {
  if (start === destination) return 0;

  const stops = distance.length;
  let clockwise = 0;
  let counterclockwise = 0;

  for (let i = start; i !== destination; i = (i + 1) % stops) {
    clockwise += distance[i];
  }

  for (let i = destination; i !== start; i = (i + 1) % stops) {
    counterclockwise += distance[i];
  }

  return Math.min(clockwise, counterclockwise);
};

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1));
