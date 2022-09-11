export default function indexOf(array, value) {
  const length = array.length;
  for (let index = 0; index < length; index++) {
    if (array[index] === value) return index;
  }
  return -1;
}
