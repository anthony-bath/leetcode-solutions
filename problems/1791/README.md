## 1791. Find Center of Star Graph

You are given a 2D integer array `edges` where each `edges[i] = [ui, vi]` indicates that there is an edge between the nodes `ui` and `vi`. Return the center of the given star graph.

Example 1:
<img src="https://assets.leetcode.com/uploads/2021/02/24/star_graph.png" />

```
Input: edges = [[1,2],[2,3],[4,2]]
Output: 2
Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
```

Example 2:

```
Input: edges = [[1,2],[5,1],[1,3],[1,4]]
Output: 1

```

Constraints:

- `3 <= n <= 10^5`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `1 <= ui, vi <= n`
- `ui != vi`
- The given edges represent a valid star graph.
