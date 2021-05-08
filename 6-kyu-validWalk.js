function isValidWalk(walk) {
  let horizontal = 0;
  let vertical = 0;

  if (walk.length !== 10) {
    return false;
  }

  for (const iterator of walk) {
    switch (iterator) {
      case "n":
        vertical++;
        break;
      case "e":
        horizontal++;
        break;
      case "s":
        vertical--;
        break;
      case "w":
        horizontal--;
    }
  }
  return horizontal === 0 ? (vertical === 0 ? true : false) : false;
}

// function isValidWalk(walk) {
//   var dx = 0;
//   var dy = 0;
//   var dt = walk.length;

//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case "n":
//         dy--;
//         break;
//       case "s":
//         dy++;
//         break;
//       case "w":
//         dx--;
//         break;
//       case "e":
//         dx++;
//         break;
//     }
//   }

//   return dt === 10 && dx === 0 && dy === 0;
// }

// advanced solution
// function isValidWalk(walk) {
//   function count(val) {
//     return walk.filter(function (a) {
//       return a == val;
//     }).length;
//   }
//   return (
//     walk.length == 10 && count("n") == count("s") && count("w") == count("e")
//   );
// }
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
