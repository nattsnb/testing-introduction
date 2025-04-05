export function isElementInArray(array, desiredElement) {
  for (let i = 0; i < array.length; ++i) {
    const element = array.pop();
    if (element === desiredElement) {
      return true;
    }
  }
  return false;
}
