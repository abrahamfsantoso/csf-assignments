function primeFactors(n) {
  let newArr = [],
    obj = {},
    str = "";
  cal(n);
  function cal(n) {
    if (n > 1) {
      for (let i = 2; i <= n; i++) {
        if (n % i == 0) {
          newArr.push(i);
          cal(n / i);
          return true;
        }
      }
    } else {
      return true;
    }
  }
  newArr.map(function (x) {
    obj[x] ? obj[x]++ : (obj[x] = 1);
  });
  for (let item in obj) {
    obj[item] == 1 && (str += "(" + item + ")");
    obj[item] > 1 && (str += "(" + item + "**" + obj[item] + ")");
  }
  return str;
}

// shorter version
function primeFactors(n) {
  for (let i = 2, res = "", f; i <= n; i++) {
    f = 0;
    while (n % i == 0) {
      f++;
      n /= i;
    }
    res += f ? "(" + (f > 1 ? i + "**" + f : i) + ")" : "";
  }
  return res || "(" + n + ")";
}

// The line

// while (n%i == 0) { f++; n/=i }

// literally means "while n can be divided by i, do so, update n and increase the counter f".n /= i is just shorthand for n = n / i.
// The for loop gives the number 2 in the first iteration, which is a prime number, and by which n will be divided until it can no more. In the next iteration of the for loop, i will be now 3 which is also a prime number so the same process repeats until n is no more divisible by 3. Then comes 4, but since 4 is a multiple of 2 (n / 4 == n / 2 / 2) and we know from earlier that n is no longer divisible by 2, the while loop is skipped and an empty string is simply appended to res. There goes your non-prime number.

function primeFactors(n) {
  for (var s = "", d = 2; n > 1; d++) {
    for (var k = 0; n % d == 0; k++, n /= d);
    s += k ? (k == 1 ? `(${d})` : `(${d}**${k})`) : "";
  }
  return s;
}
console.log(primeFactors(7775460));
console.log(primeFactors(86240));
