import { getSquaredNumbers } from './getSquaredNumbers';

describe('The getSquaredNumbers function', () => {
  describe('when number is passed as argument', () => {
    const array = [1, 5, -4, 2, 3];
    it('should return squared values', () => {
      const result = getSquaredNumbers(array);
      expect(result).toEqual([1, 25, 16, 4, 9]);
    });
  });

  describe('when array where either element is not a number is passed as argument', () => {
    const array = [1, 2, 3, '', 7, 6];
    it('should throw error with correct message', () => {
      expect(() => {
        getSquaredNumbers(array);
      }).toThrow(Error('That is not a number.'));
    });
  });
});
