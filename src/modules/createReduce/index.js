import isArrayLike from "../isArrayLike/index.js";
import keys from "../keys/index.js";

function createReduce(dir) {
  const reducer = function (obj, iteratee, memo, initial) {
    let _keys = !isArrayLike(obj) && keys(obj),
      length = (_keys || obj).length,
      index = dir > 0 ? 0 : length - 1;
    if (!initial) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      const currentKey = _keys ? _keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };
  return function (obj, iteratee, memo) {
    const initial = arguments.length >= 3;
    return reducer(obj, iteratee, memo, initial);
  };
}

export default createReduce;
