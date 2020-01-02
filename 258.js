/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let check = true;
  let sum = 0 + num;
  while (check === true) {
    sum = ("" + sum).split("").reduce((a, s) => parseInt(a) + parseInt(s));
    check = sum < 10 ? false : true;
  }
  console.log(sum);
};

addDigits(3129);