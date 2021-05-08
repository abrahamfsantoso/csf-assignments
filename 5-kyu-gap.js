function gap(g, m, n) {
  function isPrime(n) {
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  let temp = null;

  for (let i = m; i < n; i++) {
    if (isPrime(i)) {
      if (i - temp === g) return [temp, i];
      temp = i;
    }
  }
  return null;
}

function gap(g, m, n) {
  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num !== 1 && num !== 0;
  };
  var firstPrime = 0;
  var secondPrime = 0;
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      firstPrime = secondPrime;
      secondPrime = i;
    }
    if (secondPrime - firstPrime == g) {
      return [firstPrime, secondPrime];
    }
  }
  return null;
}
// Alternative
// function gap(g, m, n) {
//   var lastPrime = 0;
//   var isPrime = function (x) {
//     for (var i = 2; i * i <= x; i++) {
//       if (x % i == 0) return false;
//     }
//     return true;
//   };

//   for (var i = m; i <= n; i++)
//     if (isPrime(i)) {
//       if (i - lastPrime == g) return [lastPrime, i];
//       else lastPrime = i;
//     }

//   return null;
// }

console.log(gap(2, 100, 110));
console.log(gap(6, 100, 110));
