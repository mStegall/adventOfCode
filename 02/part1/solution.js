function calculateChecksum(spreadSheet) {
  const rows = spreadSheet.split("\n");

//   console.log(rows);

  const rowDiffs = rows.map(row => {
    const cells = row.split(/ |\t/).map(cell => parseInt(cell));

    console.log(cells);
    const min = Math.min(...cells);
    const max = Math.max(...cells);

    return max - min;
  });
  

  return rowDiffs.reduce((a, b) => a + b);
}

module.exports = calculateChecksum;