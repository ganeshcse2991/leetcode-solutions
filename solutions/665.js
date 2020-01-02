/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let flag = 0;
    let breakAge = undefined;
    let bbCase = undefined;
    let newStart = undefined;
    let i=1;
    for(; i < nums.length ; i++){
        console.log(newStart, breakAge, flag, i, nums[i], nums[i-1]);
        if(newStart && breakAge && newStart < breakAge){
            if(bbCase === true){
                continue;
            }
            return false;
        }
        if(flag < 2){
            if(nums[i-1] > nums[i]){
                breakAge = i == 1 ? undefined : nums[i-1];
                bbCase = i == 1 ? undefined : (nums[i] > nums[i-2]);
                newStart = nums[i+1];
                flag++;
            }   
        }else{
            return false;
        }
    }
    if(flag ==2 && nums.length <=3){
        return false;
    }
    if(flag > 1){
        if(i == nums.length){
            return true;
        }else{
            return false;
        }   
     }
    return true;
    
};

checkPossibility([1, 5, 4, 6, 7, 10, 8, 9]);