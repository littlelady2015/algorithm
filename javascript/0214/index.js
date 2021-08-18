var buildTree = function(preorder, inorder) {
  var root = preorder[0];
  var index = inorder.findIndex( i => i === root);
  var left = inorder.slice(0, index);
  var right = inorder.slice(index);
  if(left.length > 1) buildTree(left, right);
  if(right.length > 1) buildTree(left,right);
  console.log(left.join(right));
  return left.join(right);
};
const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7];
buildTree(preorder, inorder);