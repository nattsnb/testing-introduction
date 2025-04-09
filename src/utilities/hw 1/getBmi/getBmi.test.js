import { getBmi } from './getBmi';

describe('The getBmi function', () => {
  describe('when arguments are numbers', () => {
    const heightInM = 1.6;
    const weightInKg = 60;
    it('should return correct value', () => {
      const result = getBmi(weightInKg, heightInM);
      expect(result).toBe(60 / (1.6 * 1.6));
    });
  });

  describe('when either argument is not a number', () => {
    const argument = '';
    it('should throw error with correct message', () => {
      expect(() => {
        getBmi(argument);
      }).toThrow('That is not a number.');
    });
  });
});
