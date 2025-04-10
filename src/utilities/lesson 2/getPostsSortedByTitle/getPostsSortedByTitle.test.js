import { getPostsSortedByTitle } from './getPostsSortedByTitle';
import getPosts from './getPosts';

jest.mock('./getPosts', () => ({
  __esModule: true,
  default: jest.fn(),
  POSTS_URL: 'https://google.com',
}));

describe('The getPostsSortedByName function', () => {
  describe('basic behaviour', () => {
    it('should call the getPosts function', async () => {
      getPosts.mockResolvedValue([]);
      await getPostsSortedByTitle();
      expect(getPosts).toHaveBeenCalled();
    });
  });
  describe('when posts array is correctly fetched in getPosts', () => {
    const sortedArray = [
      { id: 2, title: 'A Post', body: 'Post body A' },
      { id: 1, title: 'B Post', body: 'Post body B' },
      { id: 3, title: 'C Post', body: 'Post body C' },
    ];

    it('should return properly sorted array', async () => {
      getPosts.mockResolvedValue([
        { id: 1, title: 'B Post', body: 'Post body B' },
        { id: 2, title: 'A Post', body: 'Post body A' },
        { id: 3, title: 'C Post', body: 'Post body C' },
      ]);
      const result = await getPostsSortedByTitle();
      expect(result).toEqual(sortedArray);
    });
  });
  describe('when posts array is incorrectly fetched in getPosts', () => {
    it('should throw new error with correct message', async () => {
      getPosts.mockRejectedValue(new Error('Failed to fetch posts.'));
      await expect(getPostsSortedByTitle()).rejects.toThrow(
        Error('Failed to fetch posts.'),
      );
    });
  });
});
