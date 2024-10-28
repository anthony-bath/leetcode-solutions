/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
const countBalls = function (lowLimit, highLimit) {
  let boxes = new Map();
  let maxBoxCount = 0;

  for (let ball = lowLimit; ball <= highLimit; ball++) {
    const box = sumDigits(ball);

    if (!boxes.has(box)) {
      boxes.set(box, 1);
    } else {
      boxes.set(box, boxes.get(box) + 1);
    }

    if (boxes.get(box) > maxBoxCount) {
      maxBoxCount = boxes.get(box);
    }
  }

  return maxBoxCount;
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
