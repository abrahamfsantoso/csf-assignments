var arr = [1, 2, 3, 4, 5, 6, 100, 999];
arr.sort((a, b) => {
  if (a % 2 == b % 2) return a - b;
  if (a % 2 > b % 2) return -1;
  return 1;
});
console.log(arr);
