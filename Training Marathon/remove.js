function removeOdd(arr) {
  //remove odd number from arr
  for (var i = arr.length; i >= 0; i--) if (arr[i] % 2) arr.splice(i, 1);
  return arr;
}
function removeEven(arr) {
  //remove even number from arr
  for (var i = arr.length; i >= 0; i--) if (arr[i] % 2 == 0) arr.splice(i, 1);
  return arr;
}
var arr = [1, 2, 3, 4, 5];
removeOdd(arr);
console.log(arr); //output: [ 2, 4 ]
removeEven(arr);
console.log(arr); //output: []
