const assert = require("assert")
const calculateCaptcha = require("./solution");

console.log("Returns correct answer for 1212");
assert.equal(calculateCaptcha(1212), 6);

console.log("Returns correct answer for 1221");
assert.equal(calculateCaptcha(1221), 0);

console.log("Returns correct answer for 123425");
assert.equal(calculateCaptcha(123425), 4);

console.log("Returns correct answer for 123123");
assert.equal(calculateCaptcha(123123), 12);

console.log("Returns correct answer for 12131415");
assert.equal(calculateCaptcha(12131415), 4);