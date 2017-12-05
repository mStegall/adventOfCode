function findEvenDivision(nums) {
  let b;
  const a = nums.find((a, i) => {
    b = nums.slice(i + 1).find(b => {
      const divsion = Math.max(a, b) / Math.min(a, b);
      if (Number.isInteger(divsion)) {
        return divsion;
      }
    });
    return b;
  });

  return Math.max(a, b) / Math.min(a, b);
}

function calculateChecksum(spreadSheet) {
  const rows = spreadSheet.split("\n");

  //   console.log(rows);

  const rowDiffs = rows.map(row => {
    const cells = row.split(/\t| /).map(cell => parseInt(cell));

    return findEvenDivision(cells);
  });

  console.log(rowDiffs);

  return rowDiffs.reduce((a, b) => a + b);
}

module.exports = calculateChecksum;
