function chooseBestSum(t, k, ls) {
  if (ls.length < k) return null;
  const results = [[]];
  for (const value of ls) {
    const copy = [...results];
    console.log(results);
    for (const prefix of copy) {
      results.push(prefix.concat(value));
    }
  }
  return (
    results
      .filter((a) => a.length && a.length == k)
      .map((item) => item.reduce((a, b) => a + b), 0)
      .filter((item) => item <= t)
      .sort((a, b) => b - a)[0] || null
  );
}

// const chooseBestSum = (t, k, ls) =>
//   ls
//     .reduce(
//       (pre, val) => [
//         ...pre,
//         ...pre.filter((val) => val.length < k).map((v) => [...v, val]),
//       ],
//       [[]]
//     )
//     .filter((val) => val.length === k)
//     .map((val) => val.reduce((pre, val) => pre + val))
//     .filter((val) => val <= t)
//     .sort((a, b) => a - b)
//     .pop() || null;

// // Shorter version
// function chooseBestSum(t, k, ls) {
//   return (
//     ls
//       .reduce(
//         (r, e) =>
//           r.concat(r.filter((c) => c.length < k).map((c) => c.concat([e]))),
//         [[]]
//       )
//       .filter((c) => c.length === k)
//       .map((c) => c.reduce((a, b) => a + b))
//       .filter((s) => s <= t)
//       .sort((a, b) => b - a)[0] || null
//   );
// }

// // Recursive
// function chooseBestSum(t, k, ls) {
//   var biggestCount = 0;
//   var recurseTowns = function (townsSoFar, lastIndex) {
//     townsSoFar = townsSoFar || [];
//     //base case
//     if (townsSoFar.length === k) {
//       var sumDistance = townsSoFar.reduce((a, b) => a + b);
//       if (sumDistance <= t && sumDistance > biggestCount) {
//         biggestCount = sumDistance;
//       }
//       return; //EJECT
//     }
//     //recursive case
//     for (var i = lastIndex + 1 || 0; i < ls.length; i++) {
//       recurseTowns(townsSoFar.concat(ls[i]), i);
//     }
//   };
//   recurseTowns();

//   return biggestCount || null;
// }

var ts = [50, 55, 56, 57, 58];
console.log(chooseBestSum(163, 3, ts));

ts = [50];
console.log(chooseBestSum(163, 3, ts));
