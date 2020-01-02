/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {


  // return num.toString(7); // Easy solution in JS Dont use it

    let result = "",
        flag = false;
    if (num < 0) {
        flag = true;
    } else if (num === 0) {
        return "0";
    }
    num = Math.abs(num);
    while (num != 0) {
        result = (num % 7) + result;
        num = Math.floor(num / 7);
    }
    return flag === true ? (-1 * result) + "" : result;
};

console.log(convertToBase7(100))
