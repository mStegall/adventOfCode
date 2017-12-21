function findExit(offsetsText) {
  const offsets = offsetsText.split("\n").map(value => parseInt(value, 10));
  const offsetsLength = offsets.length;
  let pos = 0;
  let iterations = 0;

  while (pos >= 0 && pos < offsetsLength) {
    const value = offsets[pos];
    // console.log("Iteration ", iterations);
    // console.log("Pos ", pos);
    // console.log("Value ", value);
    if (value > 2) {
      offsets[pos] = value - 1;
    } else {
      offsets[pos] = value + 1;
    }
    pos += value;
    iterations++;
  }

  return iterations;
}

module.exports = findExit;
