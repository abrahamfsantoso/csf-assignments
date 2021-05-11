function maxMin(arr1, arr2) {
  let abs = arr1.map((el, index) => Math.abs(el - arr2[index]));
  let max = Math.max(...abs);
  let min = Math.min(...abs);
  return [max, min];
}

console.log(maxMin([1, 3, 5], [9, 8, 7]));
