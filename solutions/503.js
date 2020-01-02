/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++){
        let foundIndex = -1;
        let j = i + 1;
        for (; j < nums.length; j++){
            if (nums[j] > nums[i]) {
                foundIndex = j;
                break;
            }
        }
        if (foundIndex === -1) {
            for (j = 0; j  < i ; j++){
                if (nums[j] > nums[i]) {
                    foundIndex = j;
                    break;
                }
            }
        }
        if (foundIndex === -1) {
            if (nums[0] > nums[i]) {
                result.push(nums[0]);
            } else {
                result.push(-1);
            }
        } else {
            result.push(nums[foundIndex]);
        }
    }
    return result;
};

console.log(nextGreaterElements([3, 1, 3, 2, 4, 3, 5, 2, 1]));

