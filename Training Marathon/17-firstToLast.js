function firstToLast(str, c) {
  let first = str.indexOf(c);
  let last = str.lastIndexOf(c);
  return first < 0 ? first : last - first;
}
console.log(firstToLast("ababc", "a"));
