/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
  let _S = S.split("");
  let sum = 0, lines = 0;
  for (let i = 0; i < _S.length; i++){
    sum += widths[_S[i].charCodeAt(0) - 97];
    if (sum === 100) {
      sum = 0;
      lines++;
    } else if (sum > 100) {
      sum = 0;
      lines++;
      i--;
    }
  }
  if (sum === 100) {
    return [lines, sum]
  }
  return [lines+1, sum];
};

console.log(numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "bbbcccdddaaa"));