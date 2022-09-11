import reduce from "./modules/reduce/index";

const sum = reduce(
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  (prev, curr) => prev.concat(curr),
  []
);

const sum2 = reduce([1, 2, 3], (prev, curr) => prev + curr, 0);

const sum3 = reduce(
  {
    a: 1,
    b: 2,
    c: 3,
  },
  (prev, curr) => prev + curr,
  0
);

console.log("sum1 ", sum);
console.log("sum2 ", sum2);
console.log("sum3 ", sum3);
