/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */
var twoSum = function(nums, target) {
 var Map = {};
 var i, len = nums.length;
 var resultArray= [];
 for(i = 0;i < len; i++) {
   if(nums[i] !==0 && Map[nums[i]] && (Map[nums[i]].value *2 === target)) {                                                                  
     resultArray.push(Map[nums[i]].index, i);
     break;
   } 
   else if(Map[nums[i]]) continue;
   Map[nums[i]] = {
     value: target - nums[i],
     index: i
   }
 }
 for(i = 0; i < len; i++) {
  if(Map[nums[i]] && Map[nums[i]].value === target) {
    let exactNumber = nums.findIndex((item, oindex) => { if(item === target) return oindex});
    if(exactNumber  > -1) {
      exactNumber  < i ?  resultArray.push(exactNumber, i) : resultArray.push(i, exactNumber);
      break;
    }
  }
  if(Map[nums[i]] && Map[nums[i]].value !== 0) {
    if(Map[Map[nums[i]].value] && Map[Map[nums[i]].value].index !== Map[nums[i]].index) {
      resultArray.push(Map[nums[i]].index);
    }
  }
 }
 return resultArray;
};
