function borrow(s) {
  return s.replace(/\W/g, "").toLowerCase();
}

console.log(borrow("WhAt! FiCK! DaMn CAke?"));
