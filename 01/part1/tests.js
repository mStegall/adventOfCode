const assert = require("assert")
const calculateCaptcha = require("./solution");

console.log("Returns correct answer for 1122");
assert.equal(calculateCaptcha(1122), 3);

console.log("Returns correct answer for 1111");
assert.equal(calculateCaptcha(1111), 4);

console.log("Returns correct answer for 1234");
assert.equal(calculateCaptcha(1234), 0);

console.log("Returns correct answer for 91212129");
assert.equal(calculateCaptcha(91212129), 9);