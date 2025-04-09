import { divide } from './divide';

describe('The divide function', () => {
  describe('when the numbers do not equal zero', () => {
    it('should return a valid result', () => {
      const result = divide(10, 5);
      expect(result).toBe(2);
    });
  });

  describe('when the first number equals zero', () => {
    describe('and the second number does not equal zero', () => {
      it('should return zero', () => {
        const result = divide(0, 5);
        expect(result).toBe(0);
      });
    });
    describe('and the second number equals zero', () => {
      it('should return NaN', () => {
        const result = divide(0, 0);
        expect(result).toBe(NaN);
      });
    });
  });

  describe('when second number equals zero', () => {
    describe('and the first number does not equal zero', () => {
      it('should return Infinity', () => {
        const result = divide(5, 0);
        expect(result).toBe(Infinity);
      });
    });
    describe('and the first number equals zero', () => {
      it('should return NaN', () => {
        const result = divide(0, 0);
        expect(result).toBe(NaN);
      });
    });
  });
});
