/**
 * @param {number[]} digits
 * @return {number[]}
 */
const findEvenNumbers = function (digits) {
  if (digits.every((digit) => digit % 2 === 1)) return [];

  const digitsFreq = freq(digits);
  const result = [];

  outer: for (let n = 100; n < 999; n += 2) {
    const nFreq = freq(`${n}`.split('').map(Number));

    for (const [digit, count] of nFreq) {
      if (!((digitsFreq.get(digit) ?? 0) >= count)) {
        continue outer;
      }
    }

    result.push(n);
  }

  return result;
};

function freq(array) {
  return array.reduce((map, digit) => map.set(digit, (map.get(digit) ?? 0) + 1), new Map());
}
