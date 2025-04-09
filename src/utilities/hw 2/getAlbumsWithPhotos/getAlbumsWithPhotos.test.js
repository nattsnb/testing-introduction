import { getAlbumsWithPhotos } from './getAlbumsWithPhotos';
import { getAlbums } from '../getAlbumsSortedByTitle/getAlbums';
import { getPhotos } from '../getPhotosSortedByTitle/getPhotos';

jest.mock('../getAlbumsSortedByTitle/getAlbums', () => ({
  __esModule: true,
  getAlbums: jest.fn(),
}));

jest.mock('../getPhotosSortedByTitle/getPhotos', () => ({
  __esModule: true,
  getPhotos: jest.fn(),
}));

describe('The getAlbumsWithPhotos function', () => {
  describe('basic behaviour', () => {
    it('should call the getAlbums function', async () => {
      getAlbums.mockResolvedValue([]);
      getPhotos.mockResolvedValue([]);
      await getAlbumsWithPhotos();
      expect(getAlbums).toHaveBeenCalled();
    });

    it('should call the getPhotos function', async () => {
      getAlbums.mockResolvedValue([]);
      getPhotos.mockResolvedValue([]);
      await getAlbumsWithPhotos();
      expect(getPhotos).toHaveBeenCalled();
    });
  });

  describe('when both fetches succeeded', () => {
    const arrangedArray = [
      {
        id: 1,
        title: 'Album 1',
        photos: [
          { id: 101, albumId: 1, title: 'Photo 1' },
          { id: 102, albumId: 1, title: 'Photo 2' },
        ],
      },
      {
        id: 2,
        title: 'Album 2',
        photos: [{ id: 201, albumId: 2, title: 'Photo 3' }],
      },
    ];

    it('should return correctly arranged array', async () => {
      getAlbums.mockResolvedValue([
        { id: 1, title: 'Album 1' },
        { id: 2, title: 'Album 2' },
      ]);

      getPhotos.mockResolvedValue([
        { id: 101, albumId: 1, title: 'Photo 1' },
        { id: 102, albumId: 1, title: 'Photo 2' },
        { id: 201, albumId: 2, title: 'Photo 3' },
      ]);

      const result = await getAlbumsWithPhotos();
      expect(result).toEqual(arrangedArray);
    });
  });

  describe('when either fetch fails', () => {
    it('should throw error when getAlbums fails', async () => {
      getAlbums.mockRejectedValue(new Error('Failed to fetch albums'));
      getPhotos.mockResolvedValue([]);

      await expect(getAlbumsWithPhotos()).rejects.toThrow(
        'Failed to fetch albums',
      );
    });

    it('should throw error when getPhotos fails', async () => {
      getAlbums.mockResolvedValue([]);
      getPhotos.mockRejectedValue(new Error('Failed to fetch photos'));

      await expect(getAlbumsWithPhotos()).rejects.toThrow(
        'Failed to fetch photos',
      );
    });
  });
});
