function removeChar(str) {
  let arr = str.split("");
  let popped = arr.pop();
  let shifted = arr.shift();
  return arr.join("");
}
console.log(removeChar("eloquent"));

// ------
function removeChar(str) {
  return str.slice(1, -1);
}
