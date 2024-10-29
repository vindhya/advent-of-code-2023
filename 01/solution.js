const lineReader = require('../utils/lineReader');

lineReader('01/input.txt').then(inputArray => {
  const numbers = [];

  inputArray.forEach(inputLine => {
    const digits = inputLine.match(/\d/g);
    const firstDigit = digits[0];
    const lastDigit = digits[digits.length - 1];
    numbers.push(Number(firstDigit + lastDigit));
  });

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
});
