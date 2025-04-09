import { getPhotosSortedByTitle } from './getPhotosSortedByTitle';
import { getPhotos } from './getPhotos';

jest.mock('./getPhotos', () => ({
  __esModule: true,
  getPhotos: jest.fn(),
}));

describe('The getPhotosSortedByTitle function', () => {
  describe('basic behaviour', () => {
    it('should call the getPhotos function', async () => {
      getPhotos.mockResolvedValue([]);
      await getPhotosSortedByTitle();
      expect(getPhotos).toHaveBeenCalled();
    });
  });

  describe('when photos array is correctly fetched in getPhotos', () => {
    const sortedArray = [
      { id: 2, title: 'A Photo', url: 'url-a' },
      { id: 1, title: 'B Photo', url: 'url-b' },
      { id: 3, title: 'C Photo', url: 'url-c' },
    ];

    it('should return properly sorted array', async () => {
      getPhotos.mockResolvedValue([
        { id: 1, title: 'B Photo', url: 'url-b' },
        { id: 2, title: 'A Photo', url: 'url-a' },
        { id: 3, title: 'C Photo', url: 'url-c' },
      ]);
      const result = await getPhotosSortedByTitle();
      expect(result).toEqual(sortedArray);
    });
  });

  describe('when photos array is incorrectly fetched in getPhotos', () => {
    it('should throw new error with correct message', async () => {
      getPhotos.mockRejectedValue(new Error('Failed to fetch photos.'));
      await expect(getPhotosSortedByTitle()).rejects.toThrow(
        Error('Failed to fetch photos.'),
      );
    });
  });
});
