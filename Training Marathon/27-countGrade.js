// filter
function countGrade(scores) {
  let obj = {};

  obj["S"] = scores.filter((el) => el == 100).length;
  obj["A"] = scores.filter((el) => el < 100 && el >= 90).length;
  obj["B"] = scores.filter((el) => el < 90 && el >= 80).length;
  obj["C"] = scores.filter((el) => el < 80 && el >= 60).length;
  obj["D"] = scores.filter((el) => el < 60 && el >= 0).length;
  obj["X"] = scores.filter((el) => el == -1).length;

  return obj;
}

console.log(countGrade([50, 60, 70, 80, 90, 100]));
