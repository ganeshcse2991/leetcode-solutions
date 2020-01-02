/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let countHash = {};
  let max = nums[0];
  countHash[nums[0]] = 1;
  for (let i = 1; i < nums.length; i++){
    countHash[nums[i]] = countHash[nums[i]] ? countHash[nums[i]]+1 : 1;
    max = countHash[max] < countHash[nums[i]] ? nums[i] : max;
    console.log(nums[i], countHash[nums[i]], max);
  }
  return max;
};

majorityElement([3, 3, 4]);