/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
  const v1 = version1.split('.').map(Number);
  const v2 = version2.split('.').map(Number);

  const len = Math.max(v1.length, v2.length);

  for (let i = 0; i < len; i++) {
    const v1i = v1[i] ?? 0;
    const v2i = v2[i] ?? 0;

    if (v1i === v2i) continue;
    if (v1i < v2i) return -1;

    return 1;
  }

  return 0;
};
