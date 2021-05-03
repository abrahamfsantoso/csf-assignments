var validWord = function (dictionary, word) {
  for (var i = 0; i < dictionary.length; i++) {
    if (dictionary[i] == word) return true;
    if (
      dictionary[i].length < word.length &&
      dictionary[i] == word.substr(0, dictionary[i].length)
    ) {
      if (validWord(dictionary, word.substr(dictionary[i].length))) return true;
    }
  }
  return false;
};

// Shorter version
var validWord = function (dictionary, word) {
  reg = new RegExp("^(" + dictionary.join("|") + ")+$");
  return reg.test(word);
};

console.log(validWord(["code", "wars"], "codewars"));
