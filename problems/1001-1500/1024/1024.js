/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
const videoStitching = function (clips, time) {
  clips.sort(([s1, e1], [s2, e2]) => s1 - s2 || e2 - e1);

  let count = 0;
  let farthest = 0;
  let end = 0;
  let i = 0;

  while (end < time) {
    while (i < clips.length && clips[i][0] <= end) {
      farthest = Math.max(farthest, clips[i][1]);
      i++;
    }

    if (farthest === end) return -1;

    count += 1;
    end = farthest;
  }

  return count;
};
