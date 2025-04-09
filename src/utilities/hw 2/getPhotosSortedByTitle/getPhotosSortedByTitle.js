import { getPhotos } from './getPhotos';

export async function getPhotosSortedByTitle() {
  try {
    const photos = await getPhotos();
    return photos.sort((firstPhoto, secondPhoto) => {
      return firstPhoto.title.localeCompare(secondPhoto.title);
    });
  } catch (error) {
    throw new Error('Failed to fetch photos.');
  }
}
