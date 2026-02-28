/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = function (envelopes) {
  envelopes.sort(([w1, h1], [w2, h2]) => w1 - w2 || h2 - h1);

  const lis = [envelopes[0][1]];

  for (let i = 1; i < envelopes.length; i++) {
    const [_, h] = envelopes[i];

    if (h > lis[lis.length - 1]) {
      lis.push(h);
    } else {
      let left = 0;
      let right = lis.length - 1;

      while (left < right) {
        const mid = (left + right) >> 1;

        if (lis[mid] < h) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }

      lis[left] = h;
    }
  }

  return lis.length;
};
