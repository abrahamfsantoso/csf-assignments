function removeDuplicateWords(s) {
  let splitWords = s.split(" ");
  let unique = [...new Set(splitWords)];
  return unique.join(" ");
}

// shorter version
function removeDuplicateWords(s) {
  return [...new Set(s.split(" "))].join(" ");
}

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
