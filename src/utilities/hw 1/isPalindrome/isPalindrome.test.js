import { isPalindrome } from './isPalindrome';

describe('The isPalindrome function', () => {
  describe('when argument is a string', () => {
    describe('and the string is palindrome', () => {
      it('should return true', () => {
        const result = isPalindrome('kayak');
        expect(result).toBe(true);
      });
      describe('when the number is not even', () => {
        it('should return true', () => {
          const result = isPalindrome('tree');
          expect(result).toBe(false);
        });
      });
    });
  });

  describe('when argument is not a string', () => {
    const argument = 456;
    it('should throw error with correct message', () => {
      expect(() => {
        isPalindrome(argument);
      }).toThrow(Error('That is not a string.'));
    });
  });
});
