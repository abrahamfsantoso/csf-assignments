function padIt(str, n) {
  while (n > 0) {
    if (n % 2 == 0) {
      str += "*";
    } else {
      str = "*" + str;
    }
    n--;
  }
  return str;
}

// shorter
function padIt(str, n) {
  while (n > 0) {
    str = n-- % 2 ? "*" + str : str + "*";
  }
  return str;
}

console.log(padIt("a", 2));
