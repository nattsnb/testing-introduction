import { isEven } from './isEven';

describe('The isEven function', () => {
  describe('when argument is a number', () => {
    describe('and the number is even', () => {
      it('should return true', () => {
        const result = isEven(2);
        expect(result).toBe(true);
      });
      describe('when the number is not even', () => {
        it('should return true', () => {
          const result = isEven(1);
          expect(result).toBe(false);
        });
      });
    });
  });

  describe('when argument is not a number', () => {
    const argument = '';
    it('should throw error with correct message', () => {
      expect(() => {
        isEven(argument);
      }).toThrow(Error('That is not a number.'));
    });
  });
});
