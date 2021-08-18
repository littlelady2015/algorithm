var daysBetweenDates = function (date1, date2) {
  var time1 = Date.parse(date1);
  var time2 = Date.parse(date2);
  return (Math.abs(time2 - time1)) / 1000 / 60 / 60 / 24;

};
// console.log(daysBetweenDates('2019-05-31', '2019-06-01'));
var closestDivisors = function (num) {
  var MIN1 = Number(10e+9);
  var MIN2 = Number(10e+9);
  var flag = [];
  var SET = [];
  for (var n = 0; n <= Math.ceil(num / 2) + 2; n++) {
    if ((num + 1) % n === 0 || (num + 2) % n) {
      SET.push(n);
    }
  }
  SET.forEach(s => {
    if ((num + 1) % s === 0) {
      var divisor11 = (num + 1) / s;
      var divisor12 = (num + 1) / divisor11;
      var min1 = Math.abs(divisor11 - divisor12);
      if (min1 < MIN1) {
        MIN1 = min1;
        flag[0] = divisor11;
      }
    }
    if ((num + 2) % s === 0) {
      var divisor21 = (num + 2) / s;
      var divisor22 = (num + 2) / divisor21;
      var min2 = Math.abs(divisor21 - divisor22)
      if (min2 < MIN2) {
        MIN2 = min2;
        flag[1] = divisor21;
      }
    }
  })
  var arr = [];
  if (MIN1 < MIN2) {
    flag[0] < (num + 1) / flag[0] ? arr.push(flag[0], (num + 1) / flag[0]) : arr.push((num + 1) / flag[0], flag[0]);
  }
  else {
    flag[1] < (num + 2) / flag[1] ? arr.push(flag[1], (num + 2) / flag[1]) : arr.push((num + 2) / flag[1], flag[1]);
  }
  return arr;
};
// console.log('closestDivisors', closestDivisors(8));
let new_closestDivisors = function (num) {
  let a = 1, b = num + 1, i;
  for (i = 1; i * i <= num + 1; i++) {
    if ((num + 1) % i === 0 && (num + 1) / i - i < b - a) {
      a=i;
      b=(num+1)/i;
    }
  }
  for(i=1;i*i<=num+2;i++) {
    if ((num + 2) % i === 0 && (num + 2) / i - i < b - a) {
      a=i;
      b=(num+2)/i;
    }
  }
  var arr = [];
  arr.push(a,b);
  return arr;
  
}
console.log('new_closestDivisors ', new_closestDivisors (123));
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  this.root = {
    left: {},
    right: {}
  };
  for (let i = 0; i < leftChild.length; i++) {
    if (leftChild[i]) this.root = this.root.left;
    if (leftChild[i]) this.root.left = leftChild[i];
    if (rightChild[i]) this.root.right = rightChild[i];
  }

  for (let i = 0; i < rightChild.length; i++) {
    if (leftChild[i]) this.root = this.root.left;
    if (leftChild[i]) this.root.left = leftChild[i];
    if (rightChild[i]) this.root.right = rightChild[i];
  }
  console.log(this.root);
};
//console.log('validateBinaryTreeNodes', validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, -1, -1, -1]));
