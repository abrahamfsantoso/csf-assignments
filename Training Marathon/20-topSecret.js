function topSecret(str) {
  let words = str.split(" ").map((el) =>
    el
      .split("")
      .map((subEl) => {
        function isLetter(char) {
          return char.length === 1 && char.match(/[a-z]/i);
        }

        let code = isLetter(subEl)
          ? subEl.charCodeAt() - 3
          : subEl.charCodeAt() - 26;

        if (code < 65 || (code < 97 && code > 90)) {
          return String.fromCharCode(code + 26);
        }
        return String.fromCharCode(code);
      })
      .join("")
  );

  return words.join(" ");
}
// shorter version
const topSecret = (str) =>
  str.replace(/[a-z]/gi, (c) =>
    String.fromCharCode(c.charCodeAt(0) + (/[abc]/i.test(c) ? 23 : -3))
  );

//question1: The top secret file number is...
answer1 = "2002";
//question2: Super agent's name is...
answer2 = "ubT";
//question3: He stole the treasure is...
answer3 = "Barbie doll";

console.log(topSecret("Pb qdph lv Mrkq"));
console.log(topSecret("Khoor Zruog!"));
