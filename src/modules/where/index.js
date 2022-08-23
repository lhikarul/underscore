import filter from "../filter/index.js";
import matcher from "../matcher/index.js";

export default function where(obj, attrs) {
  return filter(obj, matcher(attrs));
}

const listOfPlays = [
  {
    author: "Shakespeare1",
    year: 16111,
  },
  {
    author: "Shakespeare",
    book: "love",
  },
  {
    author: "Evans",
    year: 16111,
  },
  { author: "Shakespeare", year: 1611, book: "love" },
];
console.log(
  "where ",
  where(listOfPlays, { author: "Shakespeare", year: 1611 })
);
