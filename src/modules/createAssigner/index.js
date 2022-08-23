export default function createAssigner(keysFunc, defaults) {
  return function (obj) {
    let length = arguments.length;
    if (defaults) obj = Object(obj);
    if (length < 2 || obj === null) return obj;

    for (let index = 1; index < length; index++) {
      let source = arguments[index],
        keys = keysFunc(source),
        l = keys.length;
      for (let i = 0; i < l; i++) {
        let key = keys[i];
        if (!defaults || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  };
}
