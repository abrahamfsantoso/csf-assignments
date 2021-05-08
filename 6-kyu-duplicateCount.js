// function duplicateCount(text) {
//   let array = [];
//   let obj = {};
//   for (let s of text.toLowerCase()) {
//     !obj[s] ? (obj[s] = 1) : (obj[s] = obj[s] + 1);
//     obj[s] > 1 ? array.push(s) : "";
//   }
//   return [...new Set(array)].length;
// }

// Shorter version
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}
// ([^]) Capture any character, as . doesn't literally match every character.
// \\1+ Followed by itself one or more times (the \1 corresponding to the first capture group)
// Parentheses () inside a RegExp creates a Capture Group which can be repeated by \1\2 etc, depending on how many you have. Here there is only one Capture Group.
// In this case the \1+ repeats ([^ ]) so it basically says "any character" matching (the same) "any character."

// function duplicateCount(text) {
//   return text
//     .toLowerCase()
//     .split("")
//     .filter(
//       (letter, index, arr) =>
//         arr.indexOf(letter) !== index && arr.lastIndexOf(letter) === index
//     );
// }

console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("Indivisibility"));
