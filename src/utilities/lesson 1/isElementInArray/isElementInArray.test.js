import { isElementInArray } from './isElementInArray';

describe('The isElementInArray function', () => {
  describe('When provided with valid array of numbers', () => {
    let array;
    beforeEach(() => {
      array = [1, 3, 6];
    });
    describe('and the desired element is in the array', () => {
      it('should return true', () => {
        const result = isElementInArray(array, 3);
        expect(result).toBe(true);
      });
    });
    describe('and the desired element is not in the array', () => {
      it('should return false', () => {
        const result = isElementInArray(array, 2);
        expect(result).toBe(false);
      });
    });
  });
});
