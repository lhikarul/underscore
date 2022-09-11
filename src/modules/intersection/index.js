import contains from "../contains";

export default function intersection(array) {
  const length = array.length;
  const argsLength = arguments.length;

  const result = [];

  for (let index = 0; index < length; index++) {
    let item = array[index];
    if (contains(result, item)) continue;
    let j;
    for (j = 1; j < argsLength; j++) {
      if (!contains(arguments[j], item)) break;
    }
    if (j === argsLength) result.push(item);
  }

  return result;
}
