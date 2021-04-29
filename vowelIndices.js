function vowelIndices(word) {
  let arr = word.split("");
  let newArr = [];
  for (let i = 0; i < word.length; i++) {
    if (/[aeiouy]/gi.test(arr[i])) {
      newArr.push(i + 1);
    }
  }
  return newArr;
}

console.log(vowelIndices("mmm"));
console.log(vowelIndices("apple"));
