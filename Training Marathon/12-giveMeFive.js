function giveMeFive(obj) {
  //coding here
  let arr = [];
  for (const key in obj) {
    if (key.length === 5) arr.push(key);
    if (obj[key].length === 5) arr.push(obj[key]);
  }
  return arr;
}
