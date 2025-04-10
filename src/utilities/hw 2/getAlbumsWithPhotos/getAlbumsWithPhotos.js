import { getAlbums } from '../getAlbumsSortedByTitle/getAlbums';
import { getPhotos } from '../getPhotosSortedByTitle/getPhotos';

export async function getAlbumsWithPhotos() {
  const albums = await getAlbums();
  const photos = await getPhotos();
  return albums.map((album) => {
    const albumPhotos = photos.filter((photo) => photo.albumId === album.id);
    return {
      ...album,
      photos: albumPhotos,
    };
  });
}
