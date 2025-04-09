import { getSmallestNumber } from './getSmallestNumber';

describe('The getSmallestNumber function', () => {
  describe('when correct array is passed as argument', () => {
    const smallestNumber = -9;
    const array = [5, 7, smallestNumber, 0, 65, 134];
    it('should return lowest value', () => {
      const result = getSmallestNumber(array);
      expect(result).toBe(smallestNumber);
    });
  });

  describe('when array where either element is not a number is passed as argument', () => {
    const array = [1, 2, 3, '', 7, 6];
    it('should throw error with correct message', () => {
      expect(() => {
        getSmallestNumber(array);
      }).toThrow(Error('That is not a number.'));
    });
  });
});
