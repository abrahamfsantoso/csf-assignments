function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  }
  if (!array1.length) {
    return true;
  }
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] === Math.pow(array1[0], 2)) {
      array1.shift();
      array2.splice(i, 1);
      return comp(array1, array2);
    }
  }
  return false;
}

// Shorter version
function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(comp(a1, a2));
