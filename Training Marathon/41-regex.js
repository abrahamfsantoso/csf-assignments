// var str = "abba baab green glass roof";
// var reg = /(.)(.)\2\1/g;
// console.log(str.match(reg));

let regex = /\b(\w)(\w)?(\w)?\w?\3\2\1\b/g;
//    \b - spaces around the words / numbers
//    (\w) - first symbol
//    (\w)? - find out how many symbols in word/number
//    \b(\w)(\w)?(\w)?\w?\3\2\1\b checking for palyndrome
//        1   2    3    4 5 6 7

//    7th symbol must match 1 sub expression, 6 = 2, 5 = 3 and 4th symbol in the middle.
//    So \3 checks if the 5th symbol equal 3rd subexpression, /2 - if the 6th symbol match 2nd subexpression, /1 - if the 7th symbol math 1st subexpression.

//    for example str   '   A   B   C   D  C B A  '
//    regex             \b(\w)(\w)(\w)(\w)\3\2\1\b
//    sub expression №      1   2   3   4

console.log("aa bbb cccc".match(regex));
console.log("aaa bcccd".match(regex));
