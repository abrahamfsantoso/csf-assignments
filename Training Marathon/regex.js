// The following example demonstrates how to create a regular expression that matches the beginning and end of a word. It may help you to solve the following test.

var word = "abcd";
//method 1:
//
var regstr =
  word[0] + //first letter
  word.slice(1, -1).replace(/./g, ".") + //middle letters
  word.slice(-1); //last letter
var reg1 = new RegExp("^" + regstr + "$");
console.log(reg1); //output: /^a..d$/

//method 2:
var regstr = word
  .replace(/./g, ".")
  .replace(/^./, word[0])
  .replace(/.$/, word.slice(-1));
var reg2 = new RegExp("^" + regstr + "$");
console.log(reg2); //output: /^a..d$/

//method 3:
var regstr = word[0] + Array(word.length - 1).join(".") + word.slice(-1);
//use Array(x).join(".") to generate a repeat text of "."
var reg3 = new RegExp("^" + regstr + "$");
console.log(reg3); //output: /^a..d$/
