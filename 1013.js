/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  let total = A.reduce((a, s) => a + s);
  let divideCheck = total / 3;
  let currentSum = 0, count = 0;
  for (let i = 0; i < A.length; i++){
    currentSum += A[i];
    if (currentSum === divideCheck) {
      currentSum = 0;
      count++;
    }
  }
  if (count != 3 || currentSum != 0)
    return false;
  return true;
};