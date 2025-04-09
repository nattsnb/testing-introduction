export function getSquaredNumbers(array) {
  if (!array.every((element) => typeof element === 'number')) {
    throw new Error('That is not a number.');
  }
  const result = array.map((element) => element * element);
  return result;
}
