function keepOrder(ary, val) {
  for (let i = 0; i < ary.length; i++) {
    if (val <= ary[i]) {
      return i;
    }
  }
  return ary.length;
}
console.log(keepOrder([1, 2, 3, 4, 7], 5));
console.log(keepOrder([1, 2, 3, 4, 7], 0));
