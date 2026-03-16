/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
const findingUsersActiveMinutes = function (logs, k) {
  const result = Array(k).fill(0);
  const seen = new Map();

  for (const [id, minute] of logs) {
    if (!seen.has(id)) {
      seen.set(id, new Set());
    }

    const minutes = seen.get(id);
    const size = minutes.size;

    if (size > 0) {
      result[size - 1] -= 1;
    }

    minutes.add(minute);
    result[minutes.size - 1] += 1;
  }

  return result;
};
