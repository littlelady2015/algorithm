// 1.dynamic 
// 查找指定节点到当前部落最短距离和要连接的点
var nodes = ['a','b','c','d','e','f']
var sides = [
  // a到其他节点的距离
  [0,8,3,Infinity, 4],
  [8,0,10, Infinity],
  [3,4,0,3, Infinity],
  [Infinity,10,3,0,6],
  [4, Infinity,Infinity, 6,0]
]
// 找到一个到部落最短的点
// 建立图 最小生成树 Prim算法
function Prim() {
  if(nodes.length !== sides.length || nodes.length <= 1) return;
  var horde = [nodes[0]]
  while(horde.length < nodes.length) {
    // 记录最短的点
    var result = {
      dis: Infinity,
      to: null,
      from: null
    }
    for(var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if(horde.includes(node)) {
        continue;
      }
      var info = getMinDistance(node);
      if(info.dis < result.dis) {
        result.dis = info.dis;
        result.to = info.connect;
        result.from =  node;
      }
    }
    result.to.neighbors.push(result.to);
    result.from.neighbors.push(result.from);
  }
 
}
function getMinDistance(node) {
  var result = {
    dis: Infinity,
    connect: null
  }
  for(var i = 0; i < horde.length; i++) {
    var target = horde[i]; // 部落中某个节点
    var dis = getDistance(node, target);
    if(dis < result.dis) {
      result.dis = dis;
      result.connect = target;
    }
  }
}
// 两个点的距离
function getDistance(node1, node2) {
  var index1 = nodes.indexOf(node1);
  var index2 = nodes.indexOf(node2);
  return sides[index1][index2]
}
// 贪心算法 求解局部最优解， 如何求全局最优解？
// 思路：exchange(total, denos) => return minCoinsNum
// 无解 返回false
// if(!denos.length) 无解
// denos第一个面额拿出 是否和denos相等 相等直接返回
// 找零问题
function exchange(total, deno) {
  var result = [];
  while(total) {
    var max = -1;
    for(var i =0; i < deno.length; i++) {
      var d = deno[i];
      if(d > max && d <= total) {
        max = d;
      }
    }
    result.push(max);
    total = total - max;
  } 
  return result;
}
// console.log(exchange(46,[25, 10, 5, 1]))
// 动态规划 跳台阶 
function jump() {
  var table = [];
  function _jump(n) {
    if(table[n]) return table[n];
    if(n === 1) return 1;
    if(n === 2) return 2;
    var newRecord;
    newRecord = _jump(n-1) + _jump(n-2);
    return newRecord;
  }
}
// 最长公共子序列, 以空间换时间
function LCS(str1, str2) {
  // 第一个字符相同 去掉第一个 比较剩下的
  // f('acb', 'abe') 
  // 第一个字符不相同
  var table = [];
  function _LCS(str1, str2) {
    var newResult;
    if(!str1 || !str2) newResult = "";
    for(var i =0; i< table.length; i++) {
      if(table[i].str1 === str1 && table[i].str2 == str2) {
        return table[i].result;
      }
    }
    else if(str1[0] === str2[0]) {
      return str1[0] + _LCS(str1.strStr(1), str2.strStr(1))
    }
    else {
      var s1 = _LCS(str1, str2.sunStr(1)); 
      var s2 = _LCS(str.subStr(1), str2);
      var newResult = s1.length < s2.length ?  s2 : s1
    }
    table.push({
      str1: str1,
      str2: str2,
      result: newResult
    })
  }
  
}
// 先用分治法 再动态规划存值
// 2. search
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

// 3. nodeList
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
// 链表倒序
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
