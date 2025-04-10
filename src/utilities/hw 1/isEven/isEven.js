export function isEven(number) {
  if (typeof number !== 'number') {
    throw new Error('That is not a number.');
  }
  return number % 2 === 0;
}
