function howMuchCoffee(events) {
  const regexSmall = /^(cw|cat|dog|movie)$/;
  const regexBig = /^(CW|CAT|DOG|MOVIE)$/;
  let sum = 0;
  for (let i = 0; i < events.length; i++) {
    if (regexSmall.test(events[i])) {
      sum += 1;
    } else if (regexBig.test(events[i])) {
      sum += 2;
    }
  }
  return sum > 3 ? "You need extra sleep" : sum;
}

console.log(howMuchCoffee(["cw"]));
console.log(howMuchCoffee(["CW"]));
console.log(howMuchCoffee(["cw", "CAT"]));
console.log(howMuchCoffee(["cw", "CAT", "DOG"]));
