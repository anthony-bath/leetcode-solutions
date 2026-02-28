/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function (rooms) {
  const n = rooms.length;
  const visited = Array(n).fill(0);
  let seen = 0;

  function dfs(room) {
    if (visited[room]) return;

    visited[room] = 1;
    seen += 1;

    if (seen === n) return;

    for (const key of rooms[room]) {
      dfs(key);
    }
  }

  dfs(0);

  return seen === n;
};
