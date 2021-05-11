function isolateIt(arr) {
  return arr.map((el) => {
    if (el.length % 2 == 0) {
      return el.slice(0, el.length / 2) + "|" + el.slice(el.length / 2);
    } else {
      return el.slice(0, el.length / 2) + "|" + el.slice(el.length / 2 + 1);
    }
  });
}

// Shorter
function isolateIt(arr) {
  return arr.map(
    (s) => s.slice(0, s.length / 2) + "|" + s.slice(-s.length / 2)
  );
}

console.log(isolateIt(["abcd", "efgh"]));
console.log(isolateIt(["abcde", "fghij"]));
console.log(isolateIt(["1234", "56789"]));
