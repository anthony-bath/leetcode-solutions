/**
 * @param {number} x
 * @return {number}
 */
const sumOfTheDigitsOfHarshadNumber = function (x) {
  const sum = sumDigits(x);

  return x % sum ? -1 : sum;
};

function sumDigits(n) {
  let sum = 0;

  while (n > 0) {
    const rem = n % 10;
    sum += rem;

    n = (n - rem) / 10;
  }

  return sum;
}
