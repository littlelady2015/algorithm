/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  let result = [];
  function dfs(index, target, selected) {
    if(selected.length >= 150) return [];
    if(target === 0)  {
      result.push(selected.slice());
      return;
    }
    for(let i = index; i < candidates.length; i++) {
      if(candidates[i] <= target) {
        selected.push(candidates[i]);
        dfs(i, target - candidates[i], selected);
        selected.pop(candidates[i]);
      }
    }
  }
  dfs(0, target, []);
  return result;
};
const candidates = [2,3,5];
const target = 8;