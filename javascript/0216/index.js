var countNegatives = function (grid) {
  var count = 0;
  grid.forEach(gs => {
    return gs.forEach(g => {
      g < 0 ? count++ : null;
    })
  });
  return count;
};
// console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));
var ProductOfNumbers = function () {
  this.queen = [1];
  this.len = 1;
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  if (!num) {
    this.len = 0;
    this.queen = [];
    this.queen.push(1);
    this.len = this.len + 1;
    return;
  }
  this.queen[this.len] = num;
  this.queen[this.len] = this.queen[this.len] * this.queen[this.len - 1];
  this.len++
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  // console.log(this.queen);
  if (!this.queen[this.len - 1 - k]) return 0;
  return this.queen[this.len - 1] / this.queen[this.len - 1 - k];
};
// let a = new ProductOfNumbers();
// a.add(3);
// a.add(0);
// a.add(2);
// a.add(5);
// a.add(4);
// console.log('getProduct',a.getProduct(3));
// https://leetcode-cn.com/problems/maximum-number-of-events-that-can-be-attended 最多可以参加会议的数量,贪心算法
var maxEvents = function (events) {
  let Map = {}
  let sortEvent = events.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] == b[1]) {
      return a[0] > b[0] ? 1 : - 1;
    }
    return -1;
  });
  sortEvent.forEach(e => {
    for (let i = e[0]; i <= e[1]; i++) {
      if (!Map[i]) {
        Map[i] = true;
        break;
      }
    }
  });
  let keys = Object.keys(Map);
  return keys.length;

};
let testArr = [[1,100000]];
// console.log('maxEvents',maxEvents(testArr));
const setDefaultCheckedList = (ids, option) => {
  let targetArr = [];
  ids.forEach(id => {
    let arr = option.find(o => o.id === id);
    if (arr.id) targetArr.push(arr);
  });
  return targetArr;
}

// https://leetcode-cn.com/problems/construct-target-array-with-multiple-sums/ 优先队列倒推
function isPossible(target = []) {

}
// console.log('isPossible',isPossible([3,5,9]))
// 链接：https://leetcode-cn.com/problems/construct-target-array-with-multiple-sums/solution/duo-ci-qiu-he-gou-zao-mu-biao-shu-zu-by-leetcode-s/

//console.log(setDefaultCheckedList([1],[{value: 'hahah1', id: 1},{value: 'hahah2', id: 2}]));
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
  let Map = new Array(n);
  Map.forEach(m => m = 0);
  function pre(index) {
    if(index === -1) return true;
    if(Map[index]) return false;
    Map[index] = true;
    let flag1 = pre(leftChild[index]);
    let flag2 = pre(rightChild[index]);
    return flag1 && flag2;
  };
  let flag = pre(0);
  if(!flag) return false;
  for(let j =0; j < Map.length; j++){
    if(!Map[j]) return false;
  }
  return true;
};
let n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]
// console.log('validateBinaryTreeNodes',validateBinaryTreeNodes(n,leftChild,rightChild));

/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
  let sortDigits = digits.sort((a,b) => a < b ? -1 : 1);
  let Map = {
    1: [],
    2: []
  };
  function deleteOne(i) {
    let mapOne = Map[i].splice(0,1)[0];
    let index = sortDigits.findIndex((e)=> e === mapOne);
    sortDigits.splice(index,1);
  }
  let sum = 0;
  sortDigits.forEach(d => {
    if(d%3 === 1) Map[1].push(d);
    if(d%3 === 2) Map[2].push(d);
    sum += d;
  });
  if(sum === 0) return '0';
  if(sum % 3 === 0) return sortDigits.reverse().join("");
  if(sum % 3 === 1) {
    if(Map[1].length) {
      deleteOne(1);
      return sortDigits.reverse().join("");
    }else {
      if(Map[2].length > 1) {
        deleteOne(2);
        deleteOne(2);
        return sortDigits.reverse().join("");
      }
      return "";
    }
  }
  if(sum % 3 === 2) {
    if(Map[2].length) {
      deleteOne(2);
      return sortDigits.reverse().join("");
    }
    else {
      if(Map[1].length > 1) {
        deleteOne(1);
        deleteOne(1);
        return sortDigits.reverse().join("");
      }
      return false;
    }
  }
};
let digits = [9,8,6,8,6];
console.log('largestMultipleOfThree',largestMultipleOfThree(digits));