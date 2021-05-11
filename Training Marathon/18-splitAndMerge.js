function splitAndMerge(string, separator) {
  return string
    .split(" ")
    .map((el) => el.split("").join(separator))
    .join(" ");
}

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("My name is John", "-"));
