const assert = require("assert")
const checkSpreadsheet = require("./solution")

const spreadsheet = `5 1 9 5
7 5 3
2 4 6 8`;

assert.equal(checkSpreadsheet(spreadsheet), 18)
