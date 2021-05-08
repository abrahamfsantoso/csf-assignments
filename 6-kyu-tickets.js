// function tickets(peopleInLine) {
//   let total25bill = 0;
//   let total50bill = 0;

//   for (let i of peopleInLine) {
//     if (i == 25) {
//       total25bill++;
//     } else if (i == 50) {
//       total25bill--;
//       total50bill++;
//     }
//     if (i == 100) {
//       total25bill--;
//       total50bill > 0 ? total50bill-- : (total25bill -= 2);
//     }
//     if (total25bill < 0 || total50bill < 0) {
//       return "NO";
//     }
//   }

//   return "YES";
// }

// function tickets(peopleInLine) {
//   let [n25, n50, n100] = [0, 0, 0];
//   for (let v of peopleInLine) {
//     if (v == 25) n25++;
//     if (v == 50) {
//       n50++;
//       n25--;
//     }
//     if (v == 100) {
//       n25--;
//       n50 > 0 ? n50-- : (n25 -= 2);
//     }
//     if (n25 < 0 || n50 < 0) return "NO";
//   }
//   return "YES";
// }

function tickets(peopleInLine) {
  let [c25, c50, c100] = [0, 0, 0];
  for (let v of peopleInLine) {
    if (v === 25) c25++;
    if (v === 50) {
      c50++;
      c25--;
    }
    if (v === 100) {
      c25--;
      c50 > 0 ? c50-- : (c25 -= 2);
    }
    if (c25 < 0 || c50 < 0) return "NO";
  }
  return "YES";
}
console.log(tickets([25, 25, 50, 50]));
console.log(tickets([25, 100]));
