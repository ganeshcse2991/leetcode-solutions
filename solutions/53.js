/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0],
    currentMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
            if (currentMax + nums[i] < nums[i]) {
                currentMax = nums[i];
            } else {
                currentMax = currentMax + nums[i];
            }
        max = max < currentMax ? currentMax : max;
    }
    return max;
};
