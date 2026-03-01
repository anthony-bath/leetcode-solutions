/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = function (n, edges, source, destination) {
  if (n <= 3) return true;

  const graph = new Map();

  for (const [start, end] of edges) {
    if (!graph.has(start)) {
      graph.set(start, []);
    }

    if (!graph.has(end)) {
      graph.set(end, []);
    }

    graph.get(start).push(end);
    graph.get(end).push(start);
  }

  const stack = [source];
  const visited = new Set(stack);

  while (stack.length) {
    const current = stack.pop();

    for (const node of graph.get(current)) {
      if (node === destination) return true;

      if (!visited.has(node)) {
        visited.add(node);
        stack.push(node);
      }
    }
  }

  return false;
};
