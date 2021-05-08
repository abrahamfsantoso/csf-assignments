// function race(v1, v2, g) {
//   let h = Math.floor(g / (v2 - v1));
//   let m = Math.floor(((g % (v2 - v1)) * 60) / (v2 - v1));
//   let s = Math.floor(((((g % (v2 - v1)) * 60) % (v2 - v1)) * 60) / (v2 - v1));

//   return v1 >= v2 ? null : [h, m, s];
// }

function race(v1, v2, g) {
  let time = g / (v2 - v1);
  return v2 > v1
    ? [
        Math.floor(time),
        Math.floor((time * 60) % 60),
        Math.floor((time * 3600) % 60),
      ]
    : null;
}

function race(v1, v2, g) {
  if (v2 < v1) {
    return null;
  }

  var seconds = Math.floor((g / (v2 - v1)) * 3600);
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds - h * 3600) / 60);
  var s = seconds - h * 3600 - m * 60;

  return [h, m, s];
}

console.log(race(720, 850, 70));
console.log(race(80, 91, 37));
