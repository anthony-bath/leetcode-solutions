/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = function (paths) {
  const sources = new Set();
  const destinations = new Set();

  for (const [source, destination] of paths) {
    sources.add(source);
    destinations.add(destination);
  }

  for (const destination of destinations) {
    if (!sources.has(destination)) return destination;
  }
};
