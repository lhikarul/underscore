import each from "./modules/each/index.js";

const arr = each([1, 2, 3], (val) => console.log("each array value ", val));
const obj = each(
  {
    a: 1,
    b: 2,
    c: 3,
  },
  (val) => console.log("each object value ", val)
);
