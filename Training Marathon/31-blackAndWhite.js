function blackAndWhite(arr) {
  //coding here...
  let s = Array.isArray(arr)
    ? arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1
      ? "black"
      : "white"
    : "fake";
  return `It's a ${s} array`;
}
console.log(blackAndWhite(5, 13));
console.log(blackAndWhite([5, 13]));
console.log(blackAndWhite([5, 12]));
