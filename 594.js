/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let countHash = {}, count =0, maxCount = 0;
  for (let i = 0; i < nums.length; i++){
    countHash[nums[i]] = countHash[nums[i]] ? countHash[nums[i]] + 1 : 1;
  }
  let keys = Object.keys(countHash);
  for (let i = 0; i < keys.length; i++) {
    if (countHash[parseInt(keys[i])+1] != null) {
      count = countHash[keys[i]] + countHash[parseInt(keys[i])+1]
    } else if(countHash[parseInt(keys[i])+1] != null) {
      count = countHash[keys[i]] + countHash[parseInt(keys[i])+1]
    }
    maxCount = count > maxCount ? count : maxCount;
  }
  return maxCount;
};

console.log(findLHS([1, 3, 5, 7, 9, 11, 13, 15, 17]));