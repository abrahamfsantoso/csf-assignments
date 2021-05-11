function trueOrFalse(val) {
  if (!val) return "false";
  else return "true";
}

// Alternative
function trueOrFalse(val) {
  return Boolean(val).toString();
}
