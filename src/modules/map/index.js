import isArrayLike from "../isArrayLike/index.js";
import keys from "../keys/index.js";

function map(obj, iteratee) {
  const _keys = !isArrayLike(obj) && keys(obj),
    length = (_keys || obj).length,
    results = Array(length);

  for (let index = 0; index < length; index++) {
    const currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}

export default map;
