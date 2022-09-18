import isArrayLike from "./modules/isArrayLike";
import keys from "./modules/keys";
// import intersection from "./modules/intersection";

function contains(array, value) {
  let length = array.length,
    index = 0;
  for (index = 0; index < length; index++) {
    if (array[index] === value) return true;
  }
  return false;
}

function intersection(array) {
  let length = array.length,
    argsLength = arguments.length,
    result = [],
    index = 0;

  for (index = 0; index < length; index++) {
    let item = array[index];
    if (contains(result, item)) continue;

    let j = 1;

    for (; j < argsLength; j++) {
      if (!contains(arguments[j], item)) break;
    }

    if (j === argsLength) result.push(item);
  }

  return result;
}

console.log(
  intersection([1, 1, 1, 1, 1, 2, 1111], [1, 1, 1, 1, 4, 1111], [1111, 2, 4, 1])
);
