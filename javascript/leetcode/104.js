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
 * @return {number}
 */
 var maxDepth = function(root) {
  if(!root) return 0;
  function getMaxDepth(node, depth) {
    if(!node) return depth;
    return Math.max(getMaxDepth(node.left, depth+1) , getMaxDepth(node.right, depth+1));
  }
   return Math.max(getMaxDepth(root.left, 1), getMaxDepth(root.right, 1));
};
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new  TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(maxDepth(root));