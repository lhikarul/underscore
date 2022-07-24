import map from "./modules/map/index.js";

const a = map([1, 2, 3], (val) => val * 2);
const b = map({ a: 1, b: 2, c: 3 }, (val) => val * 3);

console.log(a);
console.log(b);
