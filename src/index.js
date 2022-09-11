import isArrayLike from "./modules/isArrayLike";
import keys from "./modules/keys";
import intersection from "./modules/intersection";

console.log(
  intersection([1, 1, 1, 1, 1, 2, 1111], [1, 1, 1, 1, 4, 1111], [1111, 2, 4, 1])
);
