import { isUpperCase } from './isUpperCase';

describe('The isUpperCase function', () => {
  describe('when all upper case string is provided', () => {
    it('should return true', () => {
      const result = isUpperCase('YLD;.,4DSFB');
      expect(result).toBe(true);
    });
  });
  describe('when not all upper case string is provided', () => {
    it('should return false', () => {
      const result = isUpperCase('YLD;.,4DSsfdsfd');
      expect(result).toBe(false);
    });
  });
  describe('when string with no letters is provided', () => {
    it('should throw new type error', () => {
      expect(() => isUpperCase('234234')).toThrow(
        TypeError('String does not contain letters.'),
      );
    });
  });
});
