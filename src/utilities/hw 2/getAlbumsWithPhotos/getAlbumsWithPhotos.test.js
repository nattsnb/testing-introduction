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
  beforeEach(() => {
    getPhotos.mockResolvedValue([]);
    getAlbums.mockResolvedValue([]);
  });
  it('should call both getAlbums and getPhotos functions', async () => {
    await getAlbumsWithPhotos();
    expect(getAlbums).toHaveBeenCalled();
    expect(getPhotos).toHaveBeenCalled();
  });

  describe('when both fetches succeeded', () => {
    const fetchedAlbums = [
      { id: 1, title: 'Album 1' },
      { id: 2, title: 'Album 2' },
    ];
    const fetchedPhotos = [
      { id: 101, albumId: 1, title: 'Photo 1' },
      { id: 102, albumId: 1, title: 'Photo 2' },
      { id: 201, albumId: 2, title: 'Photo 3' },
    ];
    const albumsWithPhotosArray = [
      {
        ...fetchedAlbums[0],
        photos: [fetchedPhotos[0], fetchedPhotos[1]],
      },
      {
        ...fetchedAlbums[1],
        photos: [fetchedPhotos[2]],
      },
    ];

    it('should return correctly arranged array', async () => {
      getAlbums.mockResolvedValue(fetchedAlbums);
      getPhotos.mockResolvedValue(fetchedPhotos);

      const result = await getAlbumsWithPhotos();
      expect(result).toEqual(albumsWithPhotosArray);
    });
  });

  it('should throw error when getAlbums fails', async () => {
    const albumsErrorMessage = 'Failed to fetch albums';

    getAlbums.mockRejectedValue(new Error(albumsErrorMessage));
    await expect(getAlbumsWithPhotos()).rejects.toThrow(albumsErrorMessage);
  });

  it('should throw error when getPhotos fails', async () => {
    const photosErrorMessage = 'Failed to fetch photos';

    getPhotos.mockRejectedValue(new Error(photosErrorMessage));
    await expect(getAlbumsWithPhotos()).rejects.toThrow(photosErrorMessage);
  });
});
