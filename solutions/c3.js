/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  let countHash = {};
  let sumHash = {};
  for (let i = 0; i < arr.length; i++){
    countHash[arr[i]] = countHash[arr[i]] === undefined ? 1 : countHash[arr[i]] + 1;
  }
  arr.sort();
  for (let i = 0; i < arr.length; i++){
    let beforeSum = 0;
    for (let j = i - 1; j >= 0; j--){
      beforeSum += arr[i];
    }
    sumHash[arr[i]] = (beforeSum + (arr[i] * countHash[arr[i]]));
  }
  let keys = Object.keys(countHash);
  for (let i = 0; i < keys.length; i++){
    countHash[keys[i]] = Math.abs(target - sumHash[keys[i]]);
  }
  let values = Object.values(countHash);
  let minSum = values[0];
  let targetMin = Math.round(target / arr.length);
  if (minSum > targetMin) {
    return minSum;
  }
  return targetMin;
};

console.log(findBestValue([4, 9, 3], 10));