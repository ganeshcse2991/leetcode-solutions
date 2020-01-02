/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++){
    let max = arr[i + 1];
    for (let j = i + 1; j< arr.length; j++){
      if (max < arr[j]) {
        max = arr[j];
      }
    }
    if (i == arr.length - 1) {
      result.push(-1)
    } else {
      result.push(max);
    }
    }
  return result;
};

console.log(replaceElements([17,18,5,4,6,1]));