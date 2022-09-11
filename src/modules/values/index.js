import keys from "../keys";
export default function values(obj) {
  const _keys = keys(obj);
  const length = _keys.length;
  const values = [];
  for (let i = 0; i < length; i++) {
    values[i] = obj[_keys[i]];
  }
  return values;
}
