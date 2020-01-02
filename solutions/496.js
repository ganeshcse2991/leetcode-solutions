/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let result = [];
  let indexHash = {};
  let max = nums2[nums2.length - 1];
  for (let i = nums2.length - 1; i >= 0; i--){
    if (max < nums2[i]) {
      max = nums2[i];
    }
    indexHash[nums2[i]] = max;
  }
  for (let i = 0; i < nums2.length; i++){
    indexHash[nums2[i]] = i;
  }
  for (let i = 0; i < nums1.length; i++){
    let j = indexHash[nums1[i]]
    for (; j < nums2.length; j++){
      if (nums2[j] > nums1[i])
        break;
    }
    if (j === nums2.length)
      result.push(-1);
    else
      result.push(nums2[j]);
  }
  return result;
};