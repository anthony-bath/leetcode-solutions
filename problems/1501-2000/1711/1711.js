const MOD = BigInt(10 ** 9 + 7);
const POWERS = Array.from({ length: 22 }, (_, i) => 2 ** i);

/**
 * @param {number[]} deliciousness
 * @return {number}
 */
const countPairs = function (deliciousness) {
  const freqMap = new Map();

  for (const d of deliciousness) {
    freqMap.set(d, (freqMap.get(d) ?? 0) + 1);
  }

  const seen = new Set();
  let count = 0n;

  for (const [n, freq] of freqMap) {
    for (const power of POWERS) {
      const other = power - n;

      if (!freqMap.has(other)) continue;

      if (other === n) {
        const f = BigInt(freq);
        count = (count + (f * (f - 1n)) / 2n) % MOD;
      } else if (!seen.has(other)) {
        const f = BigInt(freq);
        const o = BigInt(freqMap.get(other));

        count = (count + f * o) % MOD;
      }
    }

    seen.add(n);
  }

  return Number(count);
};
