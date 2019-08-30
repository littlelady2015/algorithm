/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let container = [];
    let repeat = 0;
    let sum = 0;
    for(let i = 0, len = nums.length; i < len; i++) {
      sum += nums[i];
      if(container[nums[i]]) {
        container[nums[i]]++;
        repeat+=nums[i];
        if(container[nums[i]] === 2) repeat+=nums[i];
      }
      else {
        container[nums[i]] = 1;
      }
    }
    return sum-repeat;
};
