function fiveLine(s) {
  let a = s.trim();
  return `${a}\n${a}${a}\n${a}${a}${a}\n${a}${a}${a}${a}\n${a}${a}${a}${a}${a}`;
}

// Repeat
function fiveLine(s) {
  s = s.trim();
  return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}
console.log(fiveLine("  a"));
