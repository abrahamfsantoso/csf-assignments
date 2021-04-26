function task(w, n, c) {
  let worker = {
    Monday: "James",
    Tuesday: "John",
    Wednesday: "Robert",
    Thursday: "Michael",
    Friday: "William",
  };

  return `It is ${w} today, ${
    worker[w]
  }, you have to work, you must spray ${n} trees and you need ${
    c * n
  } dollars to buy liquid`;
}

console.log(task("Wednesday", 10, 2));
console.log(task("Monday", 4, 3));
