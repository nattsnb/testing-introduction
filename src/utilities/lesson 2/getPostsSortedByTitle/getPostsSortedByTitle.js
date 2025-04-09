import getPosts from './getPosts';

export async function getPostsSortedByTitle() {
  try {
    const posts = await getPosts();
    return posts.sort((firstPost, secondPost) => {
      return firstPost.title.localeCompare(secondPost.title);
    });
  } catch (error) {
    throw new Error('Failed to fetch posts.');
  }
}
