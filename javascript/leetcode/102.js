/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root || !root.length) return [];
  let result = [];
  let queue = [];
  let level = 0;
  queue.push({ node: root, level });
  while (queue.length) {
    let nodeObj = queue.shift();
    if (!result[nodeObj.level]) {
      result[nodeObj.level] = [];
    }
    result[nodeObj.level].push(nodeObj.node.val);
    if (nodeObj.node.left) {
      queue.push({ node: nodeObj.node.left, level: nodeObj.level + 1 });
    }
    if (nodeObj.node.right) {
      queue.push({ node: nodeObj.node.right, level: nodeObj.level + 1 });
    }

  }
  return result;
};


const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(levelOrder([3,9,20,null,null,15,7]));