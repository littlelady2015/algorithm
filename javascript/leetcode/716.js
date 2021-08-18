// sohu interview
// 动态规划

// const { sum } = require('lodash');

// f(n) = f(n-1)+f(n-2)
function climbStairs(n) {
  if(n <= 2) return n;
  let one_step_before = 2;
  let two_step_before = 1;
  let all_ways = 0;
  for(let i = 2; i < n; i++) {
    all_ways = two_step_before + one_step_before;
    two_step_before = one_step_before;
    one_step_before = all_ways;
  }
  return all_ways;
}
// console.log(climbStairs(3));
function sum (arr) {
  if(!arr.length) return [];
  return arr.reduce((a, b) => a + b);
}
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum =  function combinationSum(candidates, target) {
  let ret = [];
  function sum (arr) {
    if(!arr.length) return [];
    return arr.reduce((a, b) => a + b);
  }
  function dfs(combine, index) {
    if(sum(combine) > target) return;
    if(sum(combine) === target) ret.push(combine);
    for(let i = index, len = candidates.length; i < len; i++) {
      combine.push(candidates[i]);
      dfs(combine.slice(), index++);
      combine.pop();
    }
    return ret;
  }
 
  return dfs([], 0)

}

console.log(combinationSum([2,3,6,7],7));

