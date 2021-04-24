function makeString(s) {
  return s
    .split(" ")
    .map((el) => el.substring(0, 1))
    .join("");
}

const makeString = (s) =>
  s
    .split(" ")
    .map((x) => x[0])
    .join("");

console.log(makeString("sees eyes xray yoat"));
