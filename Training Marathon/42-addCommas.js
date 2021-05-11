var regex = /(\d)(?=(\d{3})+$)/g;

/*coding regular expression here..*/
function addCommas(money, reg) {
  //coding the use of regex here...
  return money.replace(reg, (x) => x + ","); //like this
}

console.log(addCommas("$123", regex));
console.log(addCommas("$1234", regex));
