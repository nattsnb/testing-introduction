export function isPalindrome(string) {
  if (typeof string !== 'string') {
    throw new Error('That is not a string.');
  }
  const normalizeString = string.toLowerCase();
  const reversedString = [...normalizeString].reverse().join('');
  return normalizeString === reversedString;
}
