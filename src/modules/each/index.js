import isArrayLike from "../isArrayLike/index.js";
import keys from "../keys/index.js";

export default function each(obj, iteratee) {
  let _keys = !isArrayLike(obj) && keys(obj);
  let length = (_keys || obj).length;

  for (let i = 0; i < length; i++) {
    let currentKey = _keys ? _keys[i] : i;
    iteratee(obj[currentKey], currentKey);
  }
}
