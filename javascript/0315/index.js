function p  (arg) {
  console.log(arg)
}
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrixs) {
  let hangMin = -Number.MAX_VALUE; // 最大一行的最小值
  let hangIndex = 0;
  let tempMatrix = []
  matrixs.forEach((matrix, index)=> {
    tempMatrix = matrix.slice().sort((a,b) =>  a > b ? 1 : -1);
    if(tempMatrix[0] > hangMin) {
      hangMin = tempMatrix[0];
      hangIndex = index;
    }
  });
  let matrixArr = [];
  let numberIndex = matrixs[hangIndex].findIndex(m => m === hangMin);
  matrixs.forEach(matrix => {
    matrixArr.push(matrix[numberIndex]);
  });
   matrixArr.sort((a,b) =>  a > b ?  -1 : 1);
  if(matrixArr[0] === hangMin)return [hangMin];
  else return [];
};
// let matrix = [[36376,85652,21002,4510],[68246,64237,42962,9974],[32768,97721,47338,5841],[55103,18179,79062,46542]]
// let matrix =  [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// console.log('luckyNumbers',luckyNumbers(matrix))

/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.maxSize = maxSize;
  this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if(this.stack.length < this.maxSize) {
    this.stack.unshift(x);
    console.log(this.stack);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if(!this.stack.length) return -1;
  console.log(this.stack);
   return this.stack.shift(); 
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  if(this.stack.length < k) {
    this.stack = this.stack.map(s => {
      return s += val;
    });
    console.log(this.stack);
    return this.stack;
  }
  let tempStack = this.stack.slice(this.stack.length - k, this.stack.length);
  tempStack = tempStack.map(s => {
    return s += val;
  });
  this.stack = this.stack.slice(0,this.stack.length - k).concat(tempStack);
  console.log(this.stack);
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
let customStack = new CustomStack(12); // 栈是空的 []
p(customStack.push(83));  
customStack.increment(2, 60);
customStack.increment(9, 61);                                                // 返回 2 --> 返回栈顶值 2，栈变为 [1]
customStack.increment(1, 60);
customStack.push(82); 
customStack.push(21); 
customStack.push(58); 
customStack.increment(8,8);
customStack.push(22);
customStack.push(80);
customStack.increment(1, 64); 
customStack.push(2);                          // 栈变为 [1, 2]
customStack.push(3);                          // 栈变为 [1, 2, 3]
customStack.push(4);
customStack.pop();
customStack.pop();
customStack.push(24);
customStack.increment(2, 100);                // 栈变为 [201, 202, 103]
p(customStack.pop());
p(customStack.pop());

let excuteStack = ["CustomStack","push","increment","increment","increment","push","push","push","increment","push","push","increment","pop","pop","push"]
let args = [[12],[83],[2,60],[9,61],[1,60],[82],[21],[58],[8,8],[22],[80],[1,64],[],[],[24]]
