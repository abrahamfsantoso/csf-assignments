function mirrorImage(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    a = arr[i].toString();
    b = arr[i + 1].toString();
    if (a == b.split("").reverse().join("")) {
      return [+a, +b];
    }
  }
  return [-1, -1];
}

// some
function mirrorImage(arr) {
  var a, b;
  var result = arr.some((x, i) => {
    (a = x), (b = arr[i + 1]);
    return x === Number(String(b).split("").reverse().join(""));
  });

  return result ? [a, b] : [-1, -1];
}
console.log(mirrorImage([11, 22, 33, 33, 22, 11]));
