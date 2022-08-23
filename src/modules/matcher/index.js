import extendOwn from "../extendOwn/index.js";
import isMatch from "../isMatch/index.js";

export default function matcher(attrs) {
  attrs = extendOwn({}, attrs);
  return function (obj) {
    return isMatch(obj, attrs);
  };
}
