/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
const fairCandySwap = function (aliceSizes, bobSizes) {
  const aliceTotal = aliceSizes.reduce((total, box) => box + total, 0);
  const bobTotal = bobSizes.reduce((total, box) => box + total, 0);
  const each = (aliceTotal + bobTotal) / 2;
  const aliceSet = new Set(aliceSizes);

  for (const size of bobSizes) {
    const target = each + size - bobTotal;

    if (aliceSet.has(target)) {
      return [target, size];
    }
  }
};
