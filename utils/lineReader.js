module.exports = async filePath => {
  const fs = require('fs');
  const readline = require('readline');

  const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity,
  });

  const lineArray = [];

  for await (const line of rl) {
    lineArray.push(line);
  }

  return lineArray;
};
