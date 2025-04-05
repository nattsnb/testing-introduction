import { getNegativeNumbers } from './getNegativeNumbers';

describe('The getNegativeNumbers function', () => {
  describe('when correct array is passed as argument', () => {
    const array = [1, 5, -4, 2, -3];
    it('should return only negative values', () => {
      const result = getNegativeNumbers(array);
      expect(result).toEqual([-4, -3]);
    });
  });

  describe('when array where either element is not a number is passed as argument', () => {
    const array = [1, -2, 3, '', 7, -6];
    it('should throw error with correct message', () => {
      expect(() => {
        getNegativeNumbers(array);
      }).toThrow(Error('That is not a number.'));
    });
  });
});
