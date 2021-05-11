function rndCode() {
  let char = String.fromCharCode(~~(12 * Math.random() + 65));
  let num = ~~(10000 * Math.random());
  let symbols = "~!@#$%^&*";
  let randomSymbols1 = symbols[~~(symbols.length * Math.random())];
  let randomSymbols2 = symbols[~~(symbols.length * Math.random())];
  return char + char + num + randomSymbols1 + randomSymbols2;
}

// Alternative
// function rndCode() {
//   var randomRange = function (range, count) {
//     var sequence = [];
//     for (var i = 0; i < count; i++) {
//       sequence.push(range[~~(range.length * Math.random())]);
//     }

//     return sequence.join("");
//   };

//   return (
//     randomRange("ABCDEFGHIJKLM", 2) +
//     randomRange("0123456789", 4) +
//     randomRange("~!@#$%^&*", 2)
//   );
// }
console.log(rndCode());
