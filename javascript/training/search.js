// 深度/广度优先搜索
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");
a.left = b;
b.left = c;
b.right = d;
e.left = f;
function deepSearchFirst(node, targetValue) {
  if(!node) return false;
  if(node.value === targetValue) return true;
  return deepSearchFirst(node.left, targetValue) || deepSearchFirst(node.right, targetValue);
}
// 某一层的所有节点nodes
function breadSearchFirst(nodes, targetValue) {
  let nextNodes = []; // 下一层的节点
  if(nodes.length === 0) return false;
  for(let i = 0, len = nodes.length; i < len; i++) {
    if(!nodes[i]) continue;
    if(nodes[i].value === targetValue) return true;
    // if(nodes[i].left) nextNodes.push(nodes[i].left);
    // if(nodes[i].right) nextNodes.push(nodes[i].right);
  }
  return breadSearchFirst(nextNodes, target);
}

// tree的对比 注意js方法的运用，代码要仔细检查
function diffTree(originTree, newTree) {
  let result = [];
  if(originTree === null && newTree === null) return [];
  else if (originTree && newTree === null) result.push({
    type: '删除',
    originNode: originTree,
    newNode: newTree
  })
  else if (originTree === null && newTree) {
    result.push({
      type: '新增',
      originNode: originTree,
      newNode: newTree
    })
  } 
  else if ( originTree.value !== newTree.value) {
    result.push({
      type: '修改',
      originNode: originTree,
      newNode: newTree
    })
    let result1 = diffTree(originTree.left, newTree.left);
    let result2 = diffTree(originTree.right, newTree.right);
    result = result.concat(result1).concat(result2);
  }
  else {
    let result1 = diffTree(originTree.left, newTree.left);
    let result2 = diffTree(originTree.right, newTree.right);
    result = result.concat(result1).concat(result2);
  }
  return result;
}
// 得到一棵树
function getTree(dlr,ldr) {
  if(dlr.length !== ldr.length) throw new Error("无效的遍历值");
  if(!dlr.length) return null;
  var dlrArr = dlr.split("");
  // 找到根节点；
  var root = new Node(dlrArr[0]);
  var index = ldr.indexOf(root.value);
  var leftDlr = dlr.substring(1, index + 1);
  var leftLdr = ldr.substring(0, index);
  root.left = getTree(leftDlr, leftLdr);
  var rightDlr = dlr.substring(index + 1);
  var rightLdr = ldr.substring(leftLdr.length + 1);
  root.right = getTree(rightDlr, rightLdr);
  return root;
}
var root1 = getTree("abcd","cbda");
var root2 = getTree("afkes","kfase")
console.log(diffTree(root1, root2));









