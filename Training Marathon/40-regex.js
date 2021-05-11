var regex = /https?:\/\/[A-Za-z0-9.]+\.(com|net)/gi;

console.log("http://codewars.com".match(regex));
console.log("http://www.codewars.com".match(regex));
