import keys from "../keys/index.js";
function findKey(obj, predicate) {
  let _keys = keys(obj),
    key,
    length = _keys.length;
  for (let i = 0; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj)) return key;
  }
}

export default findKey;
