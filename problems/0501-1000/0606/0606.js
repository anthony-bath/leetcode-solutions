/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
const tree2str = function (root) {
  function dfs(node) {
    let str = `${node.val}`;

    if (!node.left && !node.right) {
      return str;
    }

    if (node.left && node.right) {
      str += `(${dfs(node.left)})(${dfs(node.right)})`;
    } else if (node.right) {
      str += `()(${dfs(node.right)})`;
    } else {
      str += `(${dfs(node.left)})`;
    }

    return str;
  }

  return dfs(root);
};
