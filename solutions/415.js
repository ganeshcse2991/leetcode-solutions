/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let carry = 0;
  let result = [];
  let _num1 = num1.split("").reverse();
  let _num2 = num2.split("").reverse();
  let iter = _num1.length > _num2.length ? _num1 : _num2;
  for (let i = 0; i < iter.length; i++){
    let sum = 0;
    if (_num1[i] !== undefined && _num2[i] !== undefined) {  
      sum += (parseInt(_num1[i]) + parseInt(_num2[i])) + carry;
    } else if (_num1[i] !== undefined) {
      sum += parseInt(_num1[i]) + carry;
    } else {
      sum += parseInt(_num2[i]) + carry;
    }
    if (sum > 9) {
      carry = 1; 
    } else {
      carry = 0;
    }
    result.push(sum % 10);
  }
    if(carry === 1){
        result.push(1);
    }
  return result.reverse().join("");
};