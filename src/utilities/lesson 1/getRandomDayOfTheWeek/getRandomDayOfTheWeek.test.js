import { getDayOfTheWeek } from './getRandomDayOfTheWeek';

describe('The getDayOfTheWeek function', () => {
  describe('When provided with number up to 6', () => {
    it('returns correct day of the week', () => {
      const result = getDayOfTheWeek(2);
      expect(result).toBe('Wednesday');
    });
    it('returns correct day of the week', () => {
      const result = getDayOfTheWeek(4);
      expect(result).toBe('Friday');
    });
  });
});
