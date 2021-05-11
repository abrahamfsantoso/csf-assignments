function countAnimals(animals, count) {
  let result = [];
  for (let c of count) {
    let reg = new RegExp(c, "g");
    !animals.match(reg)
      ? result.push(0)
      : result.push(animals.match(reg).length);
  }
  return result;
}

// Shorter
function countAnimals(animals, count) {
  return count.map(
    (animal) => (animals.match(new RegExp(animal, "g")) || []).length
  );
}
console.log(countAnimals("dog,cat", ["dog", "cat"]));
console.log(countAnimals("dog,cat", ["dog", "cat", "pig"]));
