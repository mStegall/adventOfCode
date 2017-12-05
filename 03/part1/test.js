const assert = require("assert");
const countDistance = module.require("./solution");

const tests = [
    {
        square: 1,
        answer: 0,
    },
    {
        square: 12,
        answer: 3,
    },
    {
        square: 23,
        answer: 2,
    },
    {
        square: 1024,
        answer: 31,
    },
]

tests.forEach(test => {
    console.log(test);
    assert.equal(countDistance(test.square), test.answer)
})
