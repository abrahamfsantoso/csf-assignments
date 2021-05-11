function colorOf(r, g, b) {
  let red = r.toString(16).length === 1 ? "0" + r.toString(16) : r.toString(16);
  let green =
    g.toString(16).length === 1 ? "0" + g.toString(16) : g.toString(16);
  let blue =
    b.toString(16).length === 1 ? "0" + b.toString(16) : b.toString(16);
  return `#${red}${green}${blue}`;
}

// Alternative
function colorOf(r, g, b) {
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

function toHex(n) {
  var result = n.toString(16);
  return result.length == 1 ? "0" + result : result;
}

console.log(colorOf(255, 0, 0));
