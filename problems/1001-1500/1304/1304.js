/**
 * @param {number} n
 * @return {number[]}
 */
const sumZero = function (n) {
  if (n === 1) return [0];
  if (n === 2) return [-1, 1];

  const output = n % 2 === 1 ? [0] : [];
  let x = n;

  while (output.length < n) {
    output.push(-x);
    output.push(x);
    x--;
  }

  return output;
};
