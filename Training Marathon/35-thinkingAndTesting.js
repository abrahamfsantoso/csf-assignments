function thinkingAndTesting(number, base) {
  let power = Math.floor(Math.log(number) / Math.log(base));
  return number - base ** power;
}

console.log(thinkingAndTesting(1, 2));
console.log(thinkingAndTesting(4, 2));
console.log(thinkingAndTesting(10, 2));
console.log(thinkingAndTesting(100, 2));
console.log(thinkingAndTesting(111, 10));
console.log(thinkingAndTesting(1000, 2));
