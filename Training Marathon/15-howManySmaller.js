function howManySmaller(arr, n) {
  let count = 0;
  let toFixed = arr.map((el) => el.toFixed(2));
  for (let index = 0; index < toFixed.length; index++) {
    if (toFixed[index] < n) {
      count++;
    }
  }
  return count;
}

// shorter
function howManySmaller(arr, n) {
  return arr.filter((x) => +x.toFixed(2) < n).length;
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));
