import now from "../now/index.js";

export default function throttle(func, wait, options) {
  let timeout, context, args;
  let previous = 0;

  if (!options) options = {};

  const later = () => {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    func.apply(context, args);
    context = args = null;
  };

  const throttled = () => {
    // 當前調用時間
    let _now = now();
    if (!previous && options.leading === false) previous = _now;
    // 等待時間結束後，才能繼續執行下一次的調用
    let remaining = wait - (_now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      func.apply(context, args);
      context = args = null;
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
  };

  return throttled;
}
