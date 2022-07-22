## each

`each` 的內部邏輯非常簡單

1. 判斷傳進來的 obj 是 array 還是 obj
2. 迭代 obj 的值
3. 將值傳入回調 iteratee

`each` 的實現就這麼簡單

```jsx
function each (obj, iteratee) {
	{...}
  if (isArrayLike(obj)) {
    length = obj.length;
    for (i = 0; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else {
    let _keys = keys(obj);
    length = _keys.length;
    for (i = 0; i < length; i++) {
      iteratee(obj[_keys[i]], _keys[i], obj);
    }
  }
}
```

接下來我們看看兩個內部函數，`isArrayLike`、`keys`

`isArrayLike` 內部長這樣，又使用了兩個閉包函數 `createSizePropertyCheck`、`getLength`

我們來釐清 isArrayLike 的執行邏輯

1. 先執行 `getLength`

```jsx
import createSizePropertyCheck from "../createSizePropertyCheck/index.js";
import getLength from "../getLength/index.js";

export default createSizePropertyCheck(getLength);
```

1.  `getLength` 內部將 `key` 值 `length` 傳入 `shallowProperty` 函數內，得到其返回的閉包函數 `function (obj) {…}`。

```jsx
// getLength.js

import shallowProperty from "../shallowProperty/index.js";

export default shallowProperty("length");
```

```jsx
export default function shallowProperty(key) {
  return function (obj) {
    return obj === null ? void 0 : obj[key];
  };
}
```

1. 將 `getLength` 的**返回的函數**傳入 `createSizePropertyCheck` 的 `getSizeProperty` 內
2. 返回一個閉包函數 `function (collection) {…}`

```jsx
const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

export default function createSizePropertyCheck(getSizeProperty) {
  return function (collection) {
    const sizeProperty = getSizeProperty(collection);
    return (
      typeof sizeProperty == "number" &&
      sizeProperty >= 0 &&
      sizeProperty <= MAX_ARRAY_INDEX
    );
  };
}
```

1. 將 `obj` 傳入 `isArrayLike` 內，執行 `function (collection = obj) {…}`
2. 執行 `getSizeProperty` = `function (obj ) {…}`
3. 取得 `obj[”length”]` 的值

```jsx
isArrayLike(obj))
```
