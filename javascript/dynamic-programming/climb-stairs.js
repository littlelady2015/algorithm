// Dp状态定义
// Dp方程列出来
// dp[i,0] = a[i] > 0 ? dp[i-1,0]*a[i]: dp[i-1, 1] * a[i]
// dp[i,1] = a[j] > 0 ? dp[i-1,1] * a[i] : dp[i-0, ];
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let dp = [];
  nums.forEach((n,i) => {
    dp[i] = [];
  });
  const reset = (v) => {
    return v ? v : 1;
  }
  let res = nums[0];
  dp[0][0] = nums[0];
  dp[0][1] = nums[0];
  for(let i = 1, len = nums.length; i < len; i++) {
    let x = i%2, y = (i-1)%2;
    dp[x][0] = Math.max(reset(dp[y][0])*nums[i], reset(dp[y][1])*nums[i], nums[i]);
    dp[x][1] = Math.min(reset(dp[y][0])*nums[i], reset(dp[y][1])*nums[i], nums[i]);
    res = Math.max(res, dp[x][0]);
  }
  return res;
};
const arr = [2,3,-2,4];
console.log(maxProduct(arr));
