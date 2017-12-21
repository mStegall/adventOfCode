function memoryRealloc(banks) {
  const workingMemory = [...banks];
  const bankNums = workingMemory.length;
  const seenConfigurations = new Set();
  let iterations = 0;
  while (!seenConfigurations.has(workingMemory.join(","))) {
    seenConfigurations.add(workingMemory.join(","));

    const highest = Math.max(...workingMemory);
    const highestIndex = workingMemory.indexOf(highest);

    const rounds = Math.floor(highest / bankNums);
    const remaining = highest % bankNums;

    const lastIndex = (highestIndex + remaining) % bankNums;
    // console.log({
    //   highest,
    //   highestIndex,
    //   rounds,
    //   remaining,
    //   lastIndex
    // });
    // console.log(workingMemory);
    workingMemory[highestIndex] = 0;
    for (let i = 0; i < bankNums; i++) {
      if (lastIndex < highestIndex) {
        workingMemory[i] =
          workingMemory[i] +
          (remaining && (i <= lastIndex || i > highestIndex)
            ? rounds + 1
            : rounds);
      } else if (lastIndex > highestIndex) {
        workingMemory[i] =
          workingMemory[i] +
          (remaining && (i > highestIndex && i <= lastIndex)
            ? rounds + 1
            : rounds);
      } else {
        workingMemory[i] = workingMemory[i] + rounds;
      }
    }
    iterations++;
  }

  return iterations;
}

module.exports = memoryRealloc;
