function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return "invalid string";
  }

  let even = [];
  for (let i = 0; i < string.length; i++) {
    i % 2 !== 0 ? even.push(string[i]) : "";
  }
  return even;
}

console.log(evenChars("a"));
console.log(evenChars("abcdefghijklm"));
