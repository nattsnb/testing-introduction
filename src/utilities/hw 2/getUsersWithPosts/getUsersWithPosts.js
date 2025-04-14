import getPosts from '../../lesson 2/getPostsSortedByTitle/getPosts';
import getUsers from '../../lesson 2/getUsersSortedByName/getUsers';

export async function getUsersWithPosts() {
  const posts = await getPosts();
  const users = await getUsers();
  return users.map((user) => {
    const userPosts = posts.filter((post) => post.userId === user.id);
    return {
      ...user,
      posts: userPosts,
    };
  });
}
