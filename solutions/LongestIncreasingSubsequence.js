/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let max = 1,total=nums[0], currentMax = nums[0], maxCount = 1;
  for (let i = 1; i < nums.length; i++){
    if (nums[i] > nums[i - 1]) {
      if (currentMax + nums[i] < nums[i]) {
        currentMax = nums[i];
        //maxCount--;
      } else {
        currentMax = currentMax + nums[i];
        maxCount++;
      }
    } else {
      currentMax = nums[i];
      maxCount = 1;
    } 
    //max = max < maxCount ? maxCount : max;
    if (total < currentMax) {
      total = currentMax;
      max = maxCount;
    }
  }
  return max;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));