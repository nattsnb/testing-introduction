import { getPhotosSortedByTitle } from './getPhotosSortedByTitle';
import { getPhotos } from './getPhotos';

jest.mock('./getPhotos', () => ({
  __esModule: true,
  getPhotos: jest.fn(),
}));

describe('The getPhotosSortedByTitle function', () => {
  it('should call the getPhotos function', async () => {
    await getPhotosSortedByTitle();
    expect(getPhotos).toHaveBeenCalled();
  });

  describe('when photos array is correctly fetched in getPhotos', () => {
    const photosArray = [
      { id: 1, title: 'B Photo', url: 'url-b' },
      { id: 2, title: 'A Photo', url: 'url-a' },
      { id: 3, title: 'C Photo', url: 'url-c' },
    ];
    const sortedPhotosArray = [photosArray[1], photosArray[0], photosArray[2]];

    it('should return properly sorted array', async () => {
      getPhotos.mockResolvedValue(sortedPhotosArray);
      const result = await getPhotosSortedByTitle();
      expect(result).toEqual(sortedPhotosArray);
    });
  });

  describe('when getPhotos throws an error', () => {
    it('should throw new error with correct message', async () => {
      const photosErrorMessage = 'Failed to fetch photos';
      getPhotos.mockRejectedValue(new Error(photosErrorMessage));
      await expect(getPhotosSortedByTitle()).rejects.toThrow(
        Error(photosErrorMessage),
      );
    });
  });
});
