function sortIt(arr) {
  let copy = arr.slice();
  let freq = {};
  for (let value of copy) {
    !freq[value] ? (freq[value] = 1) : (freq[value] = freq[value] + 1);
  }

  copy.sort((a, b) => {
    if (freq[a] > freq[b]) {
      return 1;
    }
    if (freq[b] === freq[a]) {
      return b - a;
    }
    return -1;
  });
  return copy;
}

// Alternative
function sortIt(arr) {
  return arr.slice().sort((a, b) => {
    let countA = arr.filter((v) => v === a).length;
    let countB = arr.filter((v) => v === b).length;
    if (countA === countB) {
      return b - a;
    } else if (countA > countB) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Shorter version
function sortIt(arr) {
  let numberOf = {};
  arr.forEach((x) => (numberOf[x] = (numberOf[x] || 0) + 1));
  return arr.slice().sort((x, y) => numberOf[x] - numberOf[y] || y - x);
}

console.log(sortIt([1, 1, 1, 2, 2, 3]));
console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]));
