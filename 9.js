/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let _p = ("" + x).split("");
  let indexLength = (_p.length - 1);
  for (let i = 0; i < _p.length/2; i++){
    if (_p[i] !== _p[indexLength- i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(-123123));
