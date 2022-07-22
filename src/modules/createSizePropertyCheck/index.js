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
