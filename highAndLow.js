function highAndLow(numbers) {
  const check = numbers.split(" ").map((x) => x * 1);
  const low = Math.min(...check);
  const high = Math.max(...check);
  return `${high} ${low}`;
}

console.log(highAndLow("1 2 3 4 5"));
