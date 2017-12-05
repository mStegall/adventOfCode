const assert = require("assert")
const checkSpreadsheet = require("./solution")

const spreadsheet = `5 9 2 8
9 4 7 3
3 8 6 5`;

assert.equal(checkSpreadsheet(spreadsheet), 9)
