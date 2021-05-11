function tailAndHead(arr) {
  let head = 0;
  let tail = 0;
  let sum = [];

  for (let i = 0; i < arr.length - 1; i++) {
    // tail = String(arr[i]).split("").splice(-1).join("");
    tail = String(arr[i])[String(arr[i]).length - 1];

    head = String(arr[i + 1])[0];
    sum.push(Number(tail) + Number(head));
  }
  return sum.reduce((a, b) => a * b);
}

// Alternative
// function tailAndHead(arr) {
//   var prod = 1;
//   arr.reduce((prev, curr) => {
//     var s1 = prev.toString();
//     var s2 = curr.toString();
//     prod *= parseInt(s1[s1.length - 1]) + parseInt(s2[0]);
//     return curr;
//   });
//   return prod;
// }

// Shorter
// function tailAndHead(arr) {
//   let m = [];
//   for (let i = 0; i < arr.length - 1; i++)
//     m.push((arr[i] % 10) + Number((arr[i + 1] + "")[0]));
//   return m.reduce((a, b) => a * b);
// }

console.log(tailAndHead([1, 2, 3, 4, 5]));
console.log(tailAndHead([111, 2345, 66, 78, 900]));
