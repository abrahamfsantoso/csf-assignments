function strToHash(str) {
  if (str == "") {
    return {};
  }

  let obj = {};
  let splitWords = str.split(", ");
  for (let i in splitWords) {
    splitWords[i] = splitWords[i].split("=");
    obj[splitWords[i][0]] = Number(splitWords[i][1]);
  }
  return obj;
}

console.log(strToHash("a=1, b=2, c=3, d=4"));
