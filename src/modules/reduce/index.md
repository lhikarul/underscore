重點在於將 memo 疊加, 然後返回 memo

```
for (; index >= 0 && index < length; index += dir) {
    const currentKey = _keys ? _keys[index] : index;
    memo = iteratee(memo, obj[currentKey], currentKey, obj);
}
return memo;
```

## reference

```
const sum = reduce(
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  (prev, curr) => prev.concat(curr),
  []
);

const sum2 = reduce(
  {
    a: 1,
    b: 2,
    c: 3,
  },
  (prev, curr) => prev + curr,
  0
);

console.log("sum1 ", sum); // [1,2,3,4,5,6]
console.log("sum2 ", sum2); // 6
```
