function Node(value) {
  this.value = value;
  this.next = null;
}
// 遍历链表，打印每个节点的数据
function print1(root) {
  var node = root;
  while(node) {
    console.log(node.value);
    node = node.next;
  }
}
function print2(root) {
  // 分治法
  if(!root) return;
  console.log(root.value);
  print2(root.next);
}
// 计算链表长度
function calculate(root) {
  if(!root) return 0;
  return 1 + calculate(root.next);
}
// 得到链表某个下标的数据
function getValue(root, index) {
  function _getValue(node, i) {
    if(i === index) return node;
    return _getValue(node.next, i + 1);
  }
  return _getValue(root, 0);
}
// 设置某个下标的数据
function setValue(root, index, value) {
  function _setValue(node, i) {
    if(!root) return;
    if(i === index)  node.value = value;
    _setValue(node.next,i + 1);
  }
  return _setValue(root, 0);
}
//  在链表节点之后加入一个新节点
function insertAfter(node, newValue) {
   var newNode = new Node(newValue);
   newNode.next = node.next;
   node.next = newNode;
}
// 链表的节点加入新节点
function push(root, newValue) {
  // 最后一个节点
  if(!root.next) root.next = new Node(newValue);
  push(root.next, newValue);
}
// 根据给定的链表和给定的要删除的值，删除对应节点
// 这个地方不对
function removeNode(root, nodeValue) {
  if(!root || !root.next) return;
  if(root.next.value === nodeValue) root.next = root.next.next;
  else removeNode(root.next, nodeValue);
} 
// 链表倒序 这里不对
function reverse(root) {
  if(!root || !root.next) return root;  
  if(root.next && root.next.next === null) {
    //  记住尾巴
    var temp = root.next;
    root.next.next = root;
    root.next = null;
    return temp;
  }
  else {
    var temp = reverse(root.next);
    root.next.next = root;
    root.next = null;
    return temp;
  }
}

var a = new Node("a"); 
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
reverse(a);
print2(d);
