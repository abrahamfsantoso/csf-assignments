function bigToSmall(arr) {
  let result = []
    .concat(...arr)
    .sort((a, b) => b - a)
    .join(">");
  return result;
}

console.log(
  bigToSmall([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
