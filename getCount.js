function getCount(str) {
  let arr = str.split("");
  var vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[aeiou]/gi.test(arr[i])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

// shorter version
// function getCount(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }

console.log(getCount("abracadabra"));
