/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    let numsHash = {};
    let totalSplit = nums.length/k;
    if(nums.length % k != 0 ){
        return false;
    }
  nums.sort(function (a, b) { return a - b });
  nums.reverse();
    for(let i=0; i<nums.length; i++){
        let temp = nums[i];
        if(numsHash[temp] == undefined){
            numsHash[temp] = 0;
        }
        numsHash[temp] = numsHash[temp]+1;
    }
  let keysList = Object.keys(numsHash);
  console.log(numsHash);
  console.log(keysList);
  console.log(totalSplit);
  for (let n = 0; n < totalSplit; n++){
    console.log("Try: ", n + 1);
    let index = 0;
    while (numsHash[keysList[index]] == 0) {
      console.log(numsHash[keysList[index]]);
      index++;
    }
    console.log("Start Index, k: ", index, k);
    console.log("Hash: ", numsHash);
    for (let i = index, j=0; j < k;j++, i++){
      numsHash[keysList[i]];
      console.log(numsHash[keysList[i]]);
      if (numsHash[keysList[i]] == 0 || (i!=index && keysList[i] - keysList[i-1] !=1)) {
        return false;
      }
      numsHash[keysList[i]]--;
    }
  }
  
  let valuesList = Object.values(numsHash);
  console.log(valuesList);
  for (let i = 0; i < valuesList.length; i++){
    if (valuesList[i] != 0) {
      return false;
    }
  }
  return true;
    // let keysList = Object.keys(numsHash);
    // let valuesList = Object.values(numsHash);
    // if(valuesList.length < k){
    //     return false;
    // }
    // for(let n=0; n < totalSplit; n++){
    //     for(let i=0; i< valuesList.length; i++){
    //         if(valuesList[i] != 0  && valuesList[i]!=valuesList[i-1] && (valuesList.length - i >= k)){
    //             for(let j=i, t=0; t< k-1; t++, j++){
    //                 if(valuesList[j+1] == 0 || (keysList[j+1] - keysList[j] != 1)){
    //                   console.log(j, i, valuesList[j + 1], valuesList[j], keysList[j + 1], keysList[j]);
    //                   return false;
    //                 }
    //                 valuesList[j]--;
    //             }
    //             valuesList[i+(k-1)]--;
    //         }
    //     }
    // }
    return true;
};
isPossibleDivide([5, 6, 7, 8, 9, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 12, 13, 14, 15, 19], 5);