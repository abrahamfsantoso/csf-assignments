function toTime(second) {
  let hours = Math.floor(second/3600);
  let minutes = Math.floor(((second/3600) % 1) *60)
  return `${hours} hour(s) and ${minutes} minute(s)`;
}

console.log(toTime(3600));
console.log(toTime(3601));
console.log(toTime(3500));
console.log(toTime(23500));
