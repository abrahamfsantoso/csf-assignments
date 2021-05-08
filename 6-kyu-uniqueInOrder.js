var uniqueInOrder = function (iterable) {
  let arr = [];
  let result = [...iterable.toString()]
    .map((s) => s.replace(/[, ]+/, ""))
    .join("")
    .split("");
  for (let index = 0; index < result.length; index++) {
    if (result[index] !== result[index - 1]) {
      arr.push(result[index]);
    }
  }
  return arr.map((el) => (el.match(/[0-9]/gi) ? el * 1 : el));
};

// Shorter version
var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

// Advanced shorter version
var uniqueInOrder = function (iterable) {
  return [].filter.call(iterable, function (a, i) {
    return iterable[i - 1] !== a;
  });
};
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
