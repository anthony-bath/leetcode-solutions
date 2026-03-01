/**
 * @param {number} n
 * @return {boolean}
 */
const checkDivisibility = function (n) {
  let [sum, product] = [0, 1];
  const original = n;

  while (n > 0) {
    const rem = n % 10;
    sum += rem;
    product *= rem;

    n = (n - rem) / 10;
  }

  return original % (sum + product) === 0;
};
