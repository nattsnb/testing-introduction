export function isUpperCase(text) {
  const stringToCheck = text.replace(/[^a-zA-Z]/g, '');
  if (stringToCheck.length === 0) {
    throw new TypeError('String does not contain letters.');
  }
  return [...stringToCheck].every((letter) => letter === letter.toUpperCase());
}
