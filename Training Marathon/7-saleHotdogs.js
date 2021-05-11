function saleHotdogs(n) {
  let p = n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90;
  return p * n;
}

// Shorter
function saleHotdogs(n) {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}
console.log(saleHotdogs(5));
