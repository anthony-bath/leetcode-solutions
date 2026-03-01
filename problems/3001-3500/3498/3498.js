/**
 * @param {string} s
 * @return {number}
 */
const reverseDegree = function (s) {
  let product = 0;
  const offset = 97;

  for (let i = 0; i < s.length; i++) {
    const position = 26 - (s.charCodeAt(i) - offset);
    product += position * (i + 1);
  }

  return product;
};
