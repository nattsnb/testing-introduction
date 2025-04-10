import { getAlbumsSortedByTitle } from './getAlbumsSortedByTitle';
import { getAlbums } from './getAlbums';

jest.mock('./getAlbums', () => ({
  __esModule: true,
  getAlbums: jest.fn(),
}));

describe('The getAlbumsSortedByTitle function', () => {
  it('should call the getAlbums function', async () => {
    await getAlbumsSortedByTitle();
    expect(getAlbums).toHaveBeenCalled();
  });

  describe('when albums array is correctly fetched in getAlbums', () => {
    const albumsArray = [
      { id: 1, title: 'B Album' },
      { id: 2, title: 'A Album' },
      { id: 3, title: 'C Album' },
    ];

    const sortedAlbumsArray = [albumsArray[1], albumsArray[0], albumsArray[2]];

    it('should return properly sorted array', async () => {
      getAlbums.mockResolvedValue(sortedAlbumsArray);
      const result = await getAlbumsSortedByTitle();
      expect(result).toEqual(sortedAlbumsArray);
    });
  });

  describe('when getAlbums throws an error', () => {
    it('should throw new error with correct message', async () => {
      const albumsErrorMessage = 'Failed to fetch albums';
      getAlbums.mockRejectedValue(new Error(albumsErrorMessage));
      await expect(getAlbumsSortedByTitle()).rejects.toThrow(
        Error(albumsErrorMessage),
      );
    });
  });
});
