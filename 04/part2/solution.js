function isValid(password) {
  const words = password.split(" ");
  const usedWords = new Set();
  return !words.some(word => {
    const sortedChars = word.split("").sort().join("")
    console.log(sortedChars)
    if (usedWords.has(sortedChars)) {
      return true;
    }

    usedWords.add(sortedChars);
  });
}

function checkPasswords(passwordsText) {
  const passwords = passwordsText.split("\n");
  return passwords.reduce((acc, pass) => (isValid(pass) ? acc + 1 : acc), 0);
}

module.exports = checkPasswords;
