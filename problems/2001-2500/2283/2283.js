/**
 * @param {string} num
 * @return {boolean}
 */
const digitCount = function (num) {
  const freq = [...num].reduce(
    (map, digit) => map.set(digit, (map.get(digit) ?? 0) + 1),
    new Map()
  );

  for (let i = 0; i < num.length; i++) {
    const digit = Number(num[i]);

    if ((freq.get(`${i}`) ?? 0) !== digit) return false;
  }

  return true;
};
