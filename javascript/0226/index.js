// 最长连续字符串
const maxSeriesLength = function (s) {
  let max = 0
  if (s.length === 0) {
    return 0;
  }
  let left = 0;
  let right = left + 1;
  do {
    if (s[left] === s[right]) {
      right++;
    }
    if (s[left] !== s[right]) {
      if(right - left > max) max = right - left;
      left = right;
      right++;
    }
 }while(right <s.length)
 console.log('max', max);
}
// maxSeriesLength('aaabbcd')

const isValid = function(s) {
  return /[\da-zA-Z]/g.test(s);
}
// 回文串 算法用最高效率计算 尽量不用正则
const isPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;
  let flag = true;
  while(left <= right) {
    while(!isValid(s[left])) {
      left++;
    }
    while(!isValid(s[right])) {
      right--;
    }
    const s_left = s[left].charCodeAt();
    const s_right = s[right].charCodeAt();
    if(s_left !== s_right &&( Math.abs(s_left - s_right)!== 32)) {
      flag = false;
      return false
    }
    else {
      left++;
      right--;
    }
  }
  return flag;
}
// console.log('isPalindrome', isPalindrome('a man, a plan, a canal: Panama'));
// 反转
const reverse = function() {
  
}