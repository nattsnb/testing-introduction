export function getSmallestNumber(array) {
  if (!array.every((element) => typeof element === 'number')) {
    throw new Error('That is not a number.');
  }
  return Math.min(...array);
}
