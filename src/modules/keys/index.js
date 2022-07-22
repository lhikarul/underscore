import isObject from "../isObject/index.js";
import has from "../has/index.js";

export default function keys(obj) {
  if (!isObject(obj)) return [];

  const keys = [];

  for (const key in obj) if (has(obj, key)) keys.push(key);

  return keys;
}
