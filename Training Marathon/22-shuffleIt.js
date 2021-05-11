function shuffleIt(arr, ...b) {
  for (let i = 0; i < b.length; i++) {
    let c = arr[b[i][0]];
    arr[b[i][0]] = arr[b[i][1]];
    arr[b[i][1]] = c;
  }
  return arr;
}

// Alternative
var shuffleIt = (arr, ...ex) => {
  for ([a, b] of ex) [arr[a], arr[b]] = [arr[b], arr[a]];
  return arr;
};
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2]));
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]));
