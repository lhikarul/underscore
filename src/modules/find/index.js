import isArrayLike from "../isArrayLike/index.js";
import findKey from "../findKey/index.js";
import findIndex from "../findIndex/index.js";

function find(obj, predicate) {
  const keyFinder = isArrayLike(obj) ? findIndex : findKey;
  const key = keyFinder(obj, predicate);
  if (key !== void 0 && key !== -1) return obj[key];
}

export default find;

const list = [1, 40, 2, 3, 4, 5, 6];
const list2 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
const result = find(list, (value) => value % 2 === 0);
const result2 = find(list2, (value) => value % 2 === 0);
console.log("result ", result);
console.log("result2 ", result2);
