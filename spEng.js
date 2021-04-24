function spEng(sentence) {
  const regex = /english/i;
  const found = regex.test(sentence);
  return found;
}

console.log(spEng("english"));
