/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let product = ("" + n).split("").reduce((a, s) => parseInt(a) * parseInt(s));
  let sum = ("" + n).split("").reduce((a, s) => parseInt(a) + parseInt(s));
  return product - sum;
};