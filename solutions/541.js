/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let cA = s.split("");
  let flag = true;
  for (let i = 0; i < cA.length; i +=(k*2)){
    if ((cA.length) - i < k) {
      for (let t = i, n=0; n < (cA.length-i)/2;n++,  t++) {
        let temp = cA[t];
        cA[t] = cA[(cA.length - 1 - (t - i))];
        cA[(cA.length - 1 - (t - i))] = temp;
      }
      break;
    } else if ((cA.length) - i < (k * 2) && (cA.length) - i >= k) {
        for (let j = i; j-i < k / 2; j++) {
          let temp = cA[j];
          cA[j] = cA[(i + k - 1) - (j -i)];
          cA[(i + k - 1) - (j-i)] = temp;
        }
      break;
    } else {
      //if (flag === true) {
        for (let j = i; j - i < k / 2; j++) {
          let temp = cA[j];
          cA[j] = cA[(i + k - 1) - (j - i)];
          cA[(i + k - 1) - (j - i)] = temp;
        }
      //   flag = false;
      // } else {
      //   flag = true;
      // }
    }
  }
  console.log(cA.join(""));
  //return cA.join("");
};

console.log("abcabcab");
reverseStr("abcabcab", 3);