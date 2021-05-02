function maskify(cc) {
  //   return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
  return cc.substr(0, cc.length - 4).replace(/./g, "#") + cc.substr(-4);
  //   return cc.replace(/.(?=.{4,}$)/g, "#");
}

console.log(maskify("4556364607935616"));

// function maskify(cc) {
//   cc = cc.split("");
//   for (let i = 0; i < cc.length - 4; i++) {
//     cc[i] = "#";
//   }

//   cc = cc.join("");
//   return cc;
// }
console.log(maskify("4556364607935616"));
