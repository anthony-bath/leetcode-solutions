/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
const smallestNumber = function (n, t) {
  if (n % 10 === 0) return n;

  while (n <= 100) {
    const product = digitsProduct(n);

    if (product % t === 0) {
      return n;
    } else {
      n++;
    }
  }

  return -1;
};

function digitsProduct(n) {
  let product = 1;

  while (n > 0) {
    const next = n % 10;
    product *= next;
    n = (n - next) / 10;
  }

  return product;
}
