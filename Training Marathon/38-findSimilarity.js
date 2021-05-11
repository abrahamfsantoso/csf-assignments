function findSimilarity(str, word) {
  let regstr =
    word[0] + //first letter
    word.slice(1, -1).replace(/./g, ".") + //middle letters
    word.slice(-1); //last letter
  let reg1 = new RegExp("^" + regstr + "$");
  return str
    .split(" ")
    .filter((el) => el.match(reg1))
    .join(" ");
}
// Alternative
function findSimilarity(str, word) {
  var reg = new RegExp("^" + word.replace(/\B.\B/g, ".") + "$"); // \B match non character boundary
  return str
    .split(/ /)
    .filter((x) => reg.test(x))
    .join(" ");
}
console.log(findSimilarity("bag dog dig dot doog dogs", "dog"));
console.log(findSimilarity("bag dog dig dot doog dogs", "dig"));
