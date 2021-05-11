function cutCube(volume, n) {
  let block = volume / n;
  let x = Math.round(Math.cbrt(block));
  return Math.cbrt(volume) % 1 == 0 ? x * x * x == block : false;
  //   return Math.cbrt(block) % 1 == 0 ? true : false;
}

// Alternative
function cutCube(volume, n) {
  return !(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1);
}
console.log(cutCube(27, 27));
console.log(cutCube(512, 8));
console.log(cutCube(50000, 50));
console.log(cutCube(27, 8));
