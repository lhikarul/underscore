## map

`const _keys = !isArrayLike(obj) && keys(obj)`

很有趣的寫法，是陣列的話，`＿keys` 是 `false` ，是物件的話 `＿keys` 是物件屬性的列表

`length = (_keys || obj).length`

通過上方的寫法，不論是物件或是陣列都能直接取得 `length`

```jsx
function map(obj, iteratee) {
  const _keys = !isArrayLike(obj) && keys(obj),
    length = (_keys || obj).length,
    results = Array(length);

  for (let index = 0; index < length; index++) {
    const currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }

  return results;
}
```

## reference

```
const a = map([1, 2, 3], (val) => val * 2);
const b = map({ a: 1, b: 2, c: 3 }, (val) => val * 3);

console.log(a); // 2,4,6
console.log(b); // 3,6,9
```
