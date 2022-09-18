import contains from "../contains";

// intersection([1, 1, 1, 1, 1, 2, 1111], [1, 1, 1, 1, 4, 1111], [1111, 2, 4, 1])
// -> [1,1111]

export default function intersection(array) {
  const length = array.length;
  const argsLength = arguments.length;

  const result = [];

  for (let index = 0; index < length; index++) {
    let item = array[index];
    // 若 result 已經包含 item，跳過此迴圈
    if (contains(result, item)) continue;
    let j;
    for (j = 1; j < argsLength; j++) {
      // arguments[j] 的陣列沒有包含 item，直接中斷迴圈，因為沒有滿足交集
      if (!contains(arguments[j], item)) break;
    }
    // 確保 item 是所有陣列的交集
    if (j === argsLength) result.push(item);
  }

  return result;
}
