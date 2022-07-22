import isArrayLike from "../isArrayLike/index.js";
import keys from "../keys/index.js";

export default function each(obj, iteratee) {
  let i, length;
  if (isArrayLike(obj)) {
    length = obj.length;
    for (i = 0; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else {
    let _keys = keys(obj);
    length = _keys.length;
    for (i = 0; i < length; i++) {
      iteratee(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;
}
