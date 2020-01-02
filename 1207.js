/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let holder = {};
  let reverseHolder = {};
  for (let i = 0; i < arr.length; i++){
      if(holder[arr[i]] === undefined){
          holder[arr[i]] = 1;
      }else{
          holder[arr[i]] += 1;
      }
  }
  let values = Object.values(holder);
    console.log(values);
  for (let i = 0; i < values.length; i++){
    if (reverseHolder[values[i]] === true) {
      return false;
    } else {
      reverseHolder[values[i]] = true;
    }
  }
    return true;
};