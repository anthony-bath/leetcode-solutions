/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
const minMutation = function (startGene, endGene, bank) {
  const queue = [{ gene: startGene, length: 0 }];
  const seen = new Set([startGene]);

  while (queue.length) {
    const { gene, length } = queue.shift();

    if (gene === endGene) {
      return length;
    }

    for (const nextGene of bank) {
      if (seen.has(nextGene)) continue;
      if (!isValidMutation(gene, nextGene)) continue;

      queue.push({ gene: nextGene, length: length + 1 });
      seen.add(nextGene);
    }
  }

  return -1;
};

function isValidMutation(g1, g2) {
  let diffs = 0;

  for (let i = 0; i < 8; i++) {
    if (g1[i] === g2[i]) continue;

    diffs += 1;

    if (diffs > 1) return false;
  }

  return true;
}
