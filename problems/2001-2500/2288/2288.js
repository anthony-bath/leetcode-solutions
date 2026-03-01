/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
const discountPrices = function (sentence, discount) {
  const words = sentence.split(' ');
  const expr = /^\$([1-9]|[1-9]\d+)$/;

  for (let i = 0; i < words.length; i++) {
    if (expr.test(words[i])) {
      const amount = Number(words[i].substring(1));
      const amountDiscounted = amount * (discount / 100);
      const adjusted = amount - amountDiscounted;

      words[i] = `$${adjusted.toFixed(2)}`;
    }
  }

  return words.join(' ');
};
