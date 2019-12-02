// 动态规划
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

