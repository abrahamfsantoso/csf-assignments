function alienLanguage(str) {
  return str.toUpperCase().replace(/\w\b/g, (el) => el.toLowerCase());
}

console.log(alienLanguage("My name is John"));
