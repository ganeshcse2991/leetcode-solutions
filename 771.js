/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let j = J.split("");
  let count = 0;
  for (let i = 0; i < j.length; i++){
    count += (S.match(new RegExp(j[i], "g")) || []).length;
  }
  return count;
};