/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  const cache = {};

  return Array(rowIndex + 1)
    .fill()
    .map((_, i) => coefficient(rowIndex, i, cache));
};

function factorial(n, cache) {
  if (n <= 1) return 1;
  if (n === 2) return 2;
  if (n in cache) return cache[n];

  cache[n] = n * factorial(n - 1, cache);

  return cache[n];
}

const { round } = Math;

function coefficient(n, k, cache) {
  return round(factorial(n, cache) / (factorial(k, cache) * factorial(n - k, cache)));
}
