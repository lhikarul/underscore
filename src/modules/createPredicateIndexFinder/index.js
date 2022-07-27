import getLength from "../getLength/index.js";

function createPredicateIndexFinder(dir) {
  return function (array, predicate) {
    const length = getLength(array);
    let index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array)) return index;
    }
    return -1;
  };
}

export default createPredicateIndexFinder;
