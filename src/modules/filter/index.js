import each from "../each/index.js";

function filter(obj, predicate) {
  const result = [];

  each(obj, (value) => {
    if (predicate(value)) result.push(value);
  });

  return result;
}

export default filter;

console.log(filter([1, 2, 3, 4, 5], (num) => num % 2 === 0));
console.log(filter({ a: 1, b: 2, c: 3, d: 4, e: 5 }, (num) => num % 2 === 0));
