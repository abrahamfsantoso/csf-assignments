// function digitize(n) {
//     return Array.from(String(n), Number).reverse()
//   }

function digitize(n) {
        return n.toString().split("").map(x => x = +x).reverse()
      }

console.log(digitize(12345));

