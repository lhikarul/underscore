import { hasOwnProperty } from "../setup/index.js";

export default function has(obj, key) {
  return obj !== null && hasOwnProperty.call(obj, key);
}
