/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
  let A = 0, B = 0, sum = 0, i = 0, N = costs.length / 2;
        while (i < 2 * N) {
            if ((costs[i][0] <= costs[i][1] && A < N) || B == N) {
                sum += costs[i++][0];
                A++;
            } else {
                sum += costs[i++][1];
                B++;
            }
        }
  return sum;
};
twoCitySchedCost([[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]);