const State = {
  Unvisited: 0,
  Safe: 1,
  Unsafe: 2,
  Visiting: 3,
};

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
const eventualSafeNodes = function (graph) {
  const state = Array(graph.length).fill(State.Unvisited);

  function dfs(node) {
    if (state[node] === State.Safe) return true;
    if (state[node] === State.Unsafe) return false;
    if (state[node] === State.Visiting) return false; // cycle

    state[node] = State.Visiting;

    for (const neighbor of graph[node]) {
      if (!dfs(neighbor)) {
        state[node] = State.Unsafe;
        return false;
      }
    }

    state[node] = State.Safe;
    return true;
  }

  const result = [];

  for (let i = 0; i < graph.length; i++) {
    if (dfs(i)) {
      result.push(i);
    }
  }

  return result;
};
