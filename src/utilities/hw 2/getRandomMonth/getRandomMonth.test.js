import getRandomNumberInRange from './getRandomNumberInRange';
import { getRandomMonth } from './getRandomMonth';

jest.mock('./getRandomNumberInRange', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('The getRandomMonth function', () => {
  it('should call the getRandomNumberInRange function with correct arguments', async () => {
    getRandomNumberInRange.mockReturnValue(2);
    await getRandomMonth();
    expect(getRandomNumberInRange).toHaveBeenCalledWith(1, 12);
  });

  describe('when getRandomMonth is called', () => {
    it('should return correct month name', () => {
      getRandomNumberInRange.mockReturnValue(3);
      const result = getRandomMonth();
      expect(result).toBe('March');
    });
  });
});
