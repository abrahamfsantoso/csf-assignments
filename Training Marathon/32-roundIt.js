function roundIt(n) {
  let arr = n.toString().split(".");
  return arr[0].length == arr[1].length
    ? Math.round(n)
    : arr[0].length > arr[1].length
    ? Math.floor(n)
    : Math.ceil(n);
}

// Alternative
function roundIt(n) {
  var [a, b] = n.toString().split(".");
  return a.length > b.length
    ? Math.floor(n)
    : a.length === b.length
    ? Math.round(n)
    : Math.ceil(n);
}

console.log(roundIt(3.45));
