/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  let pos = [], result = [];
  let _S = S.split("");
  for (let i = 0; i < _S.length; i++){
    if (_S[i] == C) {
      pos.push(i);
    }
  }
  let j = 0;
  for (let i = 0; i < _S.length; i++){
    j = j >= pos.length ? j - 1 : j;
    if (pos[j] == i) {
      result.push(0);
      j++;
    } else {
      console.log(pos[j], pos[j - 1], i, Math.abs(pos[j] - i), pos[j-1] !== undefined ? Math.abs(pos[j-1] - i): Math.abs(pos[j] - i));
      result.push(Math.min(Math.abs(pos[j] - i), pos[j-1] !== undefined ? Math.abs(pos[j-1] - i): Math.abs(pos[j] - i)));
    }
  }
  return result;
};

console.log(shortestToChar("baab", "b"));