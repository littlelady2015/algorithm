function swap(arr, i1, i2) {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}
 // 选择排序
function selectionSort(arr) {
  for(let i = 0; i < arr.length -1 ; i++) {
    // [i ~ arr.length -1] 最后一位不用比较
     var min = arr[i]; var index = i;
     for(let j = i; j < arr.length; j++) {
      if(arr[j] < min) {
        min = arr[j];
        index = j;
      }
     }
     swap(min, arr[index])
  }
}
// 插入排序
function insertSort() {
}
// 冒泡排序
function bubbleSort() {}
// 快速排序
function quickSort(arr, start, end) {
  function _quickSort(arr, start, end) {
   if(start >= end || start > arr.length -1) return;
    var low = start, high = end;
    var key = arr[end];
    while(low < high) {
      while(low < high && arr[low] <key) low++;
      arr[high] = arr[low];
      while(low < hight && arr[high] > key) high++;
      arr[low] = arr[high];
    }
   _quickSort(arr, 0, arr.length - 1)
}
// 插值查找 值的差值和下标的距离比大致相同
function interpolationSearch(arr, target) {
  if(arr.length === 0 || target < arr[0] || target > arr[arr.length -1]) return false;
  var minIndex = 0;
  var maxIndex = arr.length -1;
  while(minIndex <= maxIndex) {
    num++;
    var mid = (target - arr[minIndex]) / arr[maxIndex]-arr[minIndex]
  }
}










console.log(selectionSort([5,3,1,4,7,6]))
