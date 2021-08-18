var sortString = function (str) {
  let letterMap = {};
  let result = '';
  let flag = false;
  str.split('').forEach(s => {
    letterMap[s] ? letterMap[s]++ : letterMap[s] = 1;
  });
  while(!flag) {
    let keys = Object.keys(letterMap);
    keys = keys.sort((a,b)=> a < b ? -1: 1);
    flag = true;
    keys.forEach(key=> {
      if(letterMap[key] > 0) {
        result = result.concat(key);
        flag = false;
      }
      letterMap[key]--;
    });
    let sortKeys = Object.keys(letterMap);
    sortKeys = sortKeys.sort((a,b)=> a > b ? -1 : 1);
    sortKeys.forEach(key=> {
      if(letterMap[key] > 0) {
        result = result.concat(key);
        flag = false;
      }
      letterMap[key]--;
    });
  }
  return result;
};
console.log('sortString', sortString('leetcode'));
// start:  10:35
/**
 * @param {string} s
 * @return {number}
 */

var findTheLongestSubstring = function (str) {
  let letterMap = {
    a: 1,
    e: 2,
    i: 4,
    o: 8,
    u: 16
  }
  let result = 0;
  let arr = new Array(32);
  str.forEach((sub,index)=> {
    if(letterMap[sub]) {
      result = result^letterMap[sub];
      arr[result] = index;
    }
  });


};
const s = "leetcodeisgreat"
console.log(findTheLongestSubstring(s));