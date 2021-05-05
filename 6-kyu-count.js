// Regular map method
function count(string) {
  let obj = {};
  let splitString = string.split("");
  splitString.map((s) => {
    !obj[s] ? (obj[s] = 1) : (obj[s] = obj[s] + 1);
  });
  return obj;
}

// For of function
function count(string) {
  let obj = {};
  for (let s of string) {
    !obj[s] ? (obj[s] = 1) : (obj[s] = obj[s] + 1);
  }
  return obj;
}
console.log(count("aba"));
