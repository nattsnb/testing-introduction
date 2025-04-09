import { getAlbumsSortedByTitle } from './getAlbumsSortedByTitle';
import { getAlbums } from './getAlbums';

jest.mock('./getAlbums', () => ({
  __esModule: true,
  getAlbums: jest.fn(),
}));

describe('The getAlbumsSortedByTitle function', () => {
  describe('basic behaviour', () => {
    it('should call the getAlbums function', async () => {
      getAlbums.mockResolvedValue([]);
      await getAlbumsSortedByTitle();
      expect(getAlbums).toHaveBeenCalled();
    });
  });

  describe('when albums array is correctly fetched in getAlbums', () => {
    const sortedArray = [
      { id: 2, title: 'A Album' },
      { id: 1, title: 'B Album' },
      { id: 3, title: 'C Album' },
    ];

    it('should return properly sorted array', async () => {
      getAlbums.mockResolvedValue([
        { id: 1, title: 'B Album' },
        { id: 2, title: 'A Album' },
        { id: 3, title: 'C Album' },
      ]);
      const result = await getAlbumsSortedByTitle();
      expect(result).toEqual(sortedArray);
    });
  });

  describe('when albums array is incorrectly fetched in getAlbums', () => {
    it('should throw new error with correct message', async () => {
      getAlbums.mockRejectedValue(new Error('Failed to fetch albums.'));
      await expect(getAlbumsSortedByTitle()).rejects.toThrow(
        Error('Failed to fetch albums.'),
      );
    });
  });
});
