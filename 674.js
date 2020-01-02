/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let max = 1, maxCount = 1;
  if (nums.length < 1) {
    return 0;
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      maxCount++;
    } else {
      maxCount = 1;
    }
    max = max < maxCount ? maxCount : max;
  }
  return max;
}
  //     if (currentMax + nums[i] < nums[i]) {
  //       currentMax = nums[i];
  //       //maxCount--;
  //     } else {
  //       currentMax = currentMax + nums[i];
  //       maxCount++;
  //     }
  //   } else {
  //     currentMax = nums[i];
  //     maxCount = 1;
  //   } 
  //   //max = max < maxCount ? maxCount : max;
  //   if (total < currentMax) {
  //     total = currentMax;
  //     max = maxCount;
  //   }
  // }
  // return max;

//console.log(findLengthOfLCIS([-3, -2, -1, 0, -1, 2, 3, 4, 19]));