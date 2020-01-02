/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let _p1 = 0;
  let _p2 = 0;
  let _typed = typed.split("");
  let _name = name.split("");
  if (_name.length > _typed.length) {
    return false;
  }
  while (_p2 < _name.length) {
    if (_name[_p2] != _typed[_p1]) {
      return false;
    }
    while (_name[_p2] == _typed[_p1] && _p1 < _typed.length && _p2 < _name.length) {
      _p1++;
      _p2++;
    }
    while (_typed[_p1] === _typed[_p1 - 1]) {
      _p1++;
    }
  }
  if (_p1 != _typed.length) {
    return false;
  }
  return true;
};