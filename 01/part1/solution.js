function calculateCaptcha(captcha) {
  return captcha
    .toString()
    .split("")
    .map(digit => parseInt(digit))
    .reduce((acc, cur, i, arr) => {
      const checkPos = i === arr.length - 1 ? 0 : i + 1;

      if (cur === arr[checkPos]) {
        return acc + cur;
      }

      return acc;
    }, 0);
}

module.exports = calculateCaptcha;
