import keys from "../keys/index.js";

export default function isMatch(object, attrs) {
  let _keys = keys(attrs),
    length = _keys.length;
  if (object === null) return !length;
  let obj = Object(object);
  for (let i = 0; i < length; i++) {
    let key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }
  return true;
}
