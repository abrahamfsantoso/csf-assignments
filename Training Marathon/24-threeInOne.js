function threeInOne(arr) {
  let newArr = [];
  let size = 3;
  for (let index = 0; index < arr.length; index += size) {
    newArr.push(arr.slice(index, index + size).reduce((a, b) => a + b, 0));
  }
  return newArr;
}

// Alternative
function threeInOne(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i += 3) {
    result.push(arr[i] + arr[i + 1] + arr[i + 2]);
  }
  return result;
}
console.log(threeInOne([1, 2, 3]));
console.log(threeInOne([1, 2, 3, 4, 5, 6]));
