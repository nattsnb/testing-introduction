export function getNegativeNumbers(array) {
  if (!array.every((element) => typeof element === 'number')) {
    throw new Error('That is not a number.');
  }
  const result = array.filter((element) => element < 0);
  return result;
}
