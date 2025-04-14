import { getAlbums } from './getAlbums';

export async function getAlbumsSortedByTitle() {
  try {
    const albums = (await getAlbums()) ?? [];
    return albums.sort((firstAlbum, secondAlbum) => {
      return firstAlbum.title.localeCompare(secondAlbum.title);
    });
  } catch (error) {
    throw new Error('Failed to fetch albums');
  }
}
