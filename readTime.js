function solve(time) {
  let hour = [
    "midnight",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "midnight",
  ];

  let minutes = [
    " o'clock",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "quarter",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
    "half",
  ];
  let splitTime = time.split(":");
  let a = parseInt(splitTime[0], 10);
  let b = parseInt(splitTime[1], 10);

  if (a == 0 && b == 0) {
    return "midnight";
  } else if (b == "00") {
    return hour[a] + minutes[b];
  } else if (b == 1) {
    return `${minutes[b]} minute past ${hour[a]}`;
  } else if (b == 59) {
    return `one minute to ${hour[a + 1]}`;
  } else if (b == 15) {
    return `quarter past ${hour[a]}`;
  } else if (b == 30) {
    return `half past ${hour[a]}`;
  } else if (b == 45) {
    return `quarter to ${hour[a + 1]}`;
  } else if (b < 30) {
    return `${minutes[b]} minutes past ${hour[a]}`;
  } else if (b > 30) {
    return `${minutes[60 - b]} minutes to ${hour[a + 1]}`;
  }
}

console.log(solve("13:00"));
console.log(solve("13:09"));
console.log(solve("00:00"));
console.log(solve("01:00"));
console.log(solve("01:59"));
console.log(solve("13:15"));
console.log(solve("00:08"));
console.log(solve("00:48"));
console.log(solve("23:45"));
console.log(solve("23:59"));
