/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if(x === 0 | x === 1) return x;
  let right = x;
  let left = 1;
  let res;
  while(right - left >=0) {
    let mid = Math.floor((right+left) /2);
    if(mid === x/mid) {
      return mid;
    }
    if(mid < x/mid) {
      left = mid + 1;
      res = mid;
    }
    else if(mid > x / mid) {
      right = mid - 1;
    }
  }
  return Math.floor(res);
};
console.debug('result',mySqrt(25));
var mySqrtNewTon = function(x) {
  let r = x;
  while(r * r - x > 0.5) {
    r = 1/2*(r + x/r);
  }
  return Math.floor(r);
};