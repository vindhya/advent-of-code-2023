const lineReader = require('../utils/lineReader');

lineReader('02/input.txt').then(lines => {
  const redCubeNum = 12;
  const greenCubeNum = 13;
  const blueCubeNum = 14;
  let validGameIdSum = 0;

  lines.forEach(line => {
    const [gameString, cubeString] = line.split(':');
    const [_, gameIdString] = gameString.split(' ');
    const gameId = Number(gameIdString);
    let isValidGame = true;

    // in a game, each cube colour pull should be less than or equal
    // to the amount of cubes for that colour. the semi-colon to separate
    // pulls seems irrelevant for this problem.

    const pulls = cubeString.split(';');
    const cubes = pulls.reduce((cubes, currentPull) => {
      return cubes.concat(currentPull.split(','));
    }, []);

    for (let i = 0; i < cubes.length; i++) {
      if (cubes[i].includes('red')) {
        const cubeNum = Number(cubes[i].match(/\d+/)[0]);
        if (cubeNum > redCubeNum) {
          isValidGame = false;
          break;
        }
      }

      if (cubes[i].includes('green')) {
        const cubeNum = Number(cubes[i].match(/\d+/)[0]);
        if (cubeNum > greenCubeNum) {
          isValidGame = false;
          break;
        }
      }

      if (cubes[i].includes('blue')) {
        const cubeNum = Number(cubes[i].match(/\d+/)[0]);
        if (cubeNum > blueCubeNum) {
          isValidGame = false;
          break;
        }
      }
    }

    if (isValidGame) {
      validGameIdSum += gameId;
    }
  });

  console.log('validGameIdSum', validGameIdSum);
});
