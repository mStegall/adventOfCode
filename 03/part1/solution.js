const DEBUGGING = false;

function debugLogging(message) {
  if (DEBUGGING) {
    console.log(message);
  }
}

function countDistance(square) {
  let x = 0;
  let y = 0;
  // radius is max x and y can differ for a given spiral
  let radius = 0;
  let direction = "r";

  for (let i = 1; i < square; i++) {
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
  }

  return Math.abs(x) + Math.abs(y);
}

module.exports = countDistance;
