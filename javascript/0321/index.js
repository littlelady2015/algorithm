/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
  let count = arr1.length;
  arr1.forEach((item1,index2) => {
    let flag = false;
    arr2.forEach((item2, index2) => {
      if(Math.abs(item1 - item2) <= d) {
        flag = true;
      }
    });
    if(flag) {
      count--;
    }
  });
  return count;
};
let arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3;
console.log('findTheDistanceValue',findTheDistanceValue(arr1, arr2, d));

/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
  let seatArr = new Array(10);
  for(let i = 0 ; i <= n ; i++) {
    seatArr[i] = [0,0,0,0,0,0,0,0,0,0]
  }
  reservedSeats.forEach(seats => {
    seatArr[seats[0]][seats[1]] = 1;
  });
};
let n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]];
console.log('maxNumberOfFamilies',maxNumberOfFamilies(n, reservedSeats));