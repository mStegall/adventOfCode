function isValid(password) {
  const words = password.split(" ");
  const usedWords = new Set();
  return !words.some(word => {
    if (usedWords.has(sort)) {
      return true;
    }
    usedWords.add(word);
  });
}

function checkPasswords(passwordsText) {
  const passwords = passwordsText.split("\n");
  return passwords.reduce((acc, pass) => (isValid(pass) ? acc + 1 : acc), 0);
}

module.exports = checkPasswords;
