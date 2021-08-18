var numberOfSteps  = function(num) {
  let i = 0;
  while(num > 0) {
   i++;
   num = num %2 ? (num -1): num/2;
  }
  return i;
};
//console.log(numberOfSteps(14));

var numOfSubarrays = function(arr, k, threshold) {
  let count=0;
  for(let j = 0, len = arr.length; j < len; j++) {
    let sum = 0;
    for(let i = j; i < j+k; i++) {
      if(j+k > len ) {
        sum = 0;
        break;
      }
      else if(arr[i] > k*threshold && k*threshold !== 0) {
        sum = Infinity;
        break;
      }
      if(k*threshold === 0) return arr.length - k +1;
      sum+=arr[i];
    }
    if(sum > k*threshold - 1) {
      count++;
    }
  } 
  return count;
};
// console.log(numOfSubarrays([2,2,2,2,5,5,5,8],3,4));
var angleClock = function(hour, minutes) {
  var baseAngle = Math.abs(30*hour - 5.5*minutes);
  return baseAngle > 180 ? 360 - baseAngle : baseAngle;
};
console.log(angleClock(4,50))
