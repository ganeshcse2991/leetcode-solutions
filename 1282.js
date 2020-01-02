/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let groupHash = {}, result = [];
  for (let i = 0; i < groupSizes.length; i++){
    groupHash[groupSizes[i]] = groupHash[groupSizes[i]] === undefined ? [i] : [...groupHash[groupSizes[i]], i]
  }
  let groups = Object.keys(groupHash);
  for (let i = 0; i < groups.length; i++){
    for (let j = 0; j < groupHash[groups[i]].length / groups[i]; j++){
      result.push(groupHash[groups[i]].slice(j * groups[i],(j * parseInt(groups[i])) + parseInt(groups[i])));
    }
  }
  return result;
};

console.log(groupThePeople([2,2,1,1,1,1,1,1]));