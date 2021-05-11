function whatNumberIsIt(n) {
  if (Number.isNaN(n)) {
    return "Input number is Number.NaN";
  }
  switch (n) {
    case Number.MAX_VALUE:
      str = "Number.MAX_VALUE";
      break;
    case Number.MIN_VALUE:
      str = "Number.MIN_VALUE";
      break;
    case Number.NEGATIVE_INFINITY:
      str = "Number.NEGATIVE_INFINITY";
      break;
    case Number.POSITIVE_INFINITY:
      str = "Number.POSITIVE_INFINITY";
      break;
    default:
      str = n;
  }
  return `Input number is ${str}`;
}

// Alternative
function whatNumberIsIt(n) {
  switch (true) {
    case n == Number.MAX_VALUE:
      return "Input number is Number.MAX_VALUE";
    case n == Number.POSITIVE_INFINITY:
      return "Input number is Number.POSITIVE_INFINITY";
    case n == Number.MIN_VALUE:
      return "Input number is Number.MIN_VALUE";
    case n == Number.NEGATIVE_INFINITY:
      return "Input number is Number.NEGATIVE_INFINITY";
    case isNaN(n):
      return "Input number is Number.NaN";
    default:
      return "Input number is " + n;
  }
}
console.log(whatNumberIsIt(1.7976931348623157e308));
console.log(whatNumberIsIt(NaN));
