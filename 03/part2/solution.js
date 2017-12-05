const DEBUGGING = false;

function debugLogging(message) {
  if (DEBUGGING) {
    console.log(message);
  }
}

function calculateNeighborSum(map, x, y) {
  const neighbors = [
    [x + 1, y],
    [x + 1, y + 1],
    [x, y + 1],
    [x - 1, y + 1],
    [x - 1, y],
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1]
  ];

  const labels = neighbors.map(arr => arr.join(","));
  const values = labels.map(label => map[label]).filter(x => x);
  return values.reduce((a, b) => a + b);
}

function countDistance(square) {
  if (!square) {
    throw new Error("Must provide target");
  }
  let x = 0;
  let y = 0;
  // radius is max x and y can differ for a given spiral
  let radius = 0;
  let direction = "r";

  const map = { "0,0": 1 };
  let maxValue = 1;
  for (let i = 1; maxValue <= square; i++) {
    debugLogging(`At square ${i}, pos (${x}, ${y}), going ${direction}`);

    switch (direction) {
      case "r":
        if (x === radius) {
          debugLogging("turning");
          direction = "u";
          radius++;
          debugLogging(`New Radius: ${radius}`);
        }
        x++;
        break;
      case "u":
        debugLogging("turning");
        if (y === radius) {
          direction = "l";
          x--;
          break;
        }
        y++;
        break;
      case "l":
        debugLogging("turning");
        if (-x === radius) {
          direction = "d";
          y--;
          break;
        }
        x--;
        break;
      case "d":
        debugLogging("turning");
        if (-y === radius) {
          direction = "r";
          x++;
          break;
        }
        y--;
        break;
      default:
        throw new Error("How did you get here?");
    }

    maxValue = calculateNeighborSum(map, x, y);
    debugLogging(`Current map: ${JSON.stringify(map, null, 4)}`);
    debugLogging(`Current cell value: ${maxValue}`);
    map[[x, y].join(",")] = maxValue;
  }

  return maxValue;
}

module.exports = countDistance;
