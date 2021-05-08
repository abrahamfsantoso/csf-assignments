function tribonacci(signature, n) {
  for (let index = 3; index < n; index++) {
    signature.push(
      signature[index - 3] + signature[index - 2] + signature[index - 1]
    );
  }
  return signature.slice(0, n);
}

// Alternative
// function tribonacci(signature, n) {
//   for (var i = 0; i < n - 3; i++) {
//     // iterate n times
//     signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
//   }
//   return signature.slice(0, n); //return trib - length of n
// }
console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0, 0, 1], 10));
console.log(tribonacci([1, 1, 1], 1));
console.log(tribonacci([300, 200, 100], 0));
