/**
 * @param {string} num
 * @return {string}
 */
const largestGoodInteger = function (num) {
  const expr = /(\d)\1\1/;
  let max = '';

  for (let i = 0; i < num.length; i++) {
    const sub = num.slice(i, i + 3);

    if (expr.test(sub) && (!max || Number(sub) > Number(max))) {
      max = sub;
    }
  }

  return max;
};
