function cutIt(arr) {
  let minLength = Math.min(...arr.map((el) => el.length));
  return arr.map((el) => el.substr(0, minLength));
}
console.log(cutIt(["ab", "cde", "fgh"]));
console.log(cutIt(["abc", "defgh", "ijklmn"]));
