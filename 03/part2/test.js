const assert = require("assert");
const countDistance = module.require("./solution");

const tests = [
    {
        value: 7,
        answer: 10,
    },
    {
        value: 22,
        answer: 23,
    },
    {
        value: 24,
        answer: 25,
    },
    {
        value: 760,
        answer: 806,
    },
]

tests.forEach(test => {
    console.log(test);
    assert.equal(countDistance(test.value), test.answer)
})
