import isArrayLike from "../isArrayLike";
import values from "../values";
import indexOf from "../indexOf";

export default function contains(obj, item) {
  if (!isArrayLike(obj)) list = values(list);
  return indexOf(obj, item) >= 0;
}
