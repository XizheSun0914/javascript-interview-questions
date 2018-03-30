// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this in place with constant memory.
// For example, Given input array nums = [1,1,2],
// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

const removeDuplicates = function(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i]!==arr[j]) {
      arr[++i] = arr[j];
    }
  }
  return ++i;
}

const removeDuplicates2 = function(arr) {
  return arr.filter((val,index,self)=>self.indexOf(val)===index).length
}

console.log(removeDuplicates2([]));
console.log(removeDuplicates2([1]));
console.log(removeDuplicates2([1,1]));
console.log(removeDuplicates2([1,1,1,1,2,2,3,3,3,4,5,7,7]));