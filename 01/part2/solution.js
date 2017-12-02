function calculateCaptcha(captcha) {
  const digitArr = captcha
    .toString()
    .split("")
    .map(digit => parseInt(digit));

  const arrayLength = digitArr.length;
  const halfLength = arrayLength / 2;

  return digitArr.reduce((acc, cur, i, arr) => {
    const plusHalf = i + halfLength;
    const checkPos = plusHalf >= arrayLength ? plusHalf - arrayLength : plusHalf;

    if (cur === arr[checkPos]) {
      return acc + cur;
    }

    return acc;
  }, 0);
}

module.exports = calculateCaptcha;
