/**
 * @param {number[][]} edges
 * @return {number}
 */
const findCenter = function (edges) {
  const [to, from] = edges[0];
  const [nextTo, nextFrom] = edges[1];

  if (to === nextTo || to === nextFrom) return to;
  return from;
};
