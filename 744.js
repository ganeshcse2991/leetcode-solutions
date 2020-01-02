/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

var nextGreatestLetter = function (letters, target) {
  let result = letters[0];
    let start=0, end=letters.length-1; 
    while (start<=end){ 
      let mid = Math.floor((start + end) / 2);
      if (letters[mid] > target) {
        result = letters[mid];
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }   
    return result; 
};