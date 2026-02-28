/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
  const path = [];
  const paths = [];

  function dfs(node) {
    path.push(node);

    if (node === graph.length - 1) {
      paths.push([...path]);
    }

    for (const connection of graph[node]) {
      dfs(connection, [...path]);
    }

    path.pop();
  }

  dfs(0);
  return paths;
};
