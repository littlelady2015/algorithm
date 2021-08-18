/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let count = new Array(n + 1);
  count.fill(0);
  for (let i = 1; i <= n; i++) {
    count[i] += count[i & (i - 1)] + 1;
  }
  return count;
};
console.log(countBits(2));