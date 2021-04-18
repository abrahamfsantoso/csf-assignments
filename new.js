class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

const sample = new SmallestIntegerFinder();
console.log(sample.findSmallestInt([78, 56, 232, 12, 8]));

// -------
function findSmallestInt(args) {
  let arr = [...args];
  return Math.min(...arr);
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));
