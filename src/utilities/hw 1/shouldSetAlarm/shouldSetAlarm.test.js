import { shouldSetAlarm } from './shouldSetAlarm';

describe('The shouldSetAlarm function', () => {
  describe('when arguments are booleans', () => {
    describe('and isOnVacation is true', () => {
      const isOnVacation = true;
      const isEmployed = true;
      it('should return false', () => {
        const result = shouldSetAlarm(isEmployed, isOnVacation);
        expect(result).toBe(false);
      });
    });
    describe('and isOnVacation is false', () => {
      const isOnVacation = false;
      describe('and isEmployed is false', () => {
        const isEmployed = false;
        it('should return false', () => {
          const result = shouldSetAlarm(isEmployed, isOnVacation);
          expect(result).toBe(false);
        });
      });
      describe('and isEmployed is true', () => {
        const isEmployed = true;
        it('should return true', () => {
          const result = shouldSetAlarm(isEmployed, isOnVacation);
          expect(result).toBe(true);
        });
      });
    });
  });
  describe('when either argument is not booleans', () => {
    const isOnVacation = true;
    const isEmployed = 'true';
    it('should throw error with correct message', () => {
      expect(() => {
        shouldSetAlarm(isEmployed, isOnVacation);
      }).toThrow('That is not a boolean.');
    });
  });
});
