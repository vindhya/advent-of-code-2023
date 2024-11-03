const lineReader = require('../utils/lineReader');

// part 1
lineReader('01/input.txt').then(inputArray => {
  const numbers = [];

  inputArray.forEach(inputLine => {
    const digits = inputLine.match(/\d/g);
    const firstDigit = digits[0];
    const lastDigit = digits[digits.length - 1];
    numbers.push(Number(firstDigit + lastDigit));
  });

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log('part 1: final sum', sum);
});

const goDownTheTree = (line, i, tree) => {
  if (typeof tree[line[i]] === 'string') {
    return tree[line[i]];
  } else if (tree[line[i]]) {
    return goDownTheTree(line, i + 1, tree[line[i]]);
  } else {
    return null;
  }
};

// part 2
lineReader('01/input.txt').then(inputArray => {
  const tree = {
    o: { n: { e: '1' } },
    t: { w: { o: '2' }, h: { r: { e: { e: '3' } } } },
    f: { o: { u: { r: '4' } }, i: { v: { e: '5' } } },
    s: { i: { x: '6' }, e: { v: { e: { n: '7' } } } },
    e: { i: { g: { h: { t: '8' } } } },
    n: { i: { n: { e: '9' } } },
  };
  let finalSum = 0;

  inputArray.forEach(line => {
    const sections = line.split(/(\d)/g);
    const digits = [];
    let i = 0;

    while (i < line.length) {
      if (line[i].match(/\d/g)) {
        digits.push(line[i]);
      } else if (tree[line[i]]) {
        let whichNum = goDownTheTree(line, i + 1, tree[line[i]]);
        if (Number(whichNum)) {
          digits.push(whichNum);
        }
      }

      i++;
    }

    finalSum += Number(digits[0] + digits[digits.length - 1]);
  });

  console.log('part 2: final sum', finalSum);
});
