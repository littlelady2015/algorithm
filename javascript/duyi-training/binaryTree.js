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
a.right = e;
b.left = c;
b.right = d;
e.left = f;
function DLR(root) {
  if(!root) return ;
  console.log(root);
  DLR(root.left);
  DLR(root.right);
}

function LRD(root) {
   if(!root) return ;
  DLR(root.left);
  DLR(root.right);
  console.log(root);
}
// 根据前序遍历、中序遍历得到一棵树 ✅
function getTree(dlr,ldr) {
  if(dlr.length !== ldr.length) throw new Error("无效的遍历值");
  if(!dlr.length) return null;
  var dlrArr = dlr.split("");
  // 找到根节点；
  var root = new Node(dlrArr[0]);
  var index = ldr.indexOf(root.value);
  var leftDlr = dlr.substring(1, index + 1)
  var leftLdr = ldr.substring(0, index);
  root.left = getTree(leftDlr, leftLdr);
  var rightDlr = dlr.substring(index + 1);
  var rightLdr = ldr.substring(leftLdr.length + 1);
  root.right = getTree(rightDlr, rightLdr);
  return root;
}
var root = getTree("abcdef","cbdafe");
console.log(root)















