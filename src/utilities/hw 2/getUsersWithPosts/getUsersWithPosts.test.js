import getPosts from '../../lesson 2/getPostsSortedByTitle/getPosts';
import { getUsersWithPosts } from './getUsersWithPosts';
import getUsers from '../../lesson 2/getUsersSortedByName/getUsers';

jest.mock('../../lesson 2/getUsersSortedByName/getUsers', () => ({
  __esModule: true,
  default: jest.fn(),
  POSTS_URL: 'https://google.com',
}));

jest.mock('../../lesson 2/getPostsSortedByTitle/getPosts', () => ({
  __esModule: true,
  default: jest.fn(),
  POSTS_URL: 'https://google.com',
}));

describe('The getUsersWithPosts function', () => {
  beforeEach(() => {
    getPosts.mockResolvedValue([]);
    getUsers.mockResolvedValue([]);
  });

  it('should call both getUsers and getPosts functions', async () => {
    await getUsersWithPosts();
    expect(getUsers).toHaveBeenCalled();
    expect(getPosts).toHaveBeenCalled();
  });

  describe('when both fetches succeeded', () => {
    const fetchedPosts = [
      { id: 101, userId: 1, title: 'Post 1' },
      { id: 102, userId: 1, title: 'Post 2' },
      { id: 201, userId: 2, title: 'Post 3' },
    ];
    const fetchedUsers = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
    const usersWithPostsArray = [
      {
        ...fetchedUsers[0],
        posts: [fetchedPosts[0], fetchedPosts[1]],
      },
      {
        ...fetchedUsers[1],
        posts: [fetchedPosts[2]],
      },
    ];
    it('should return correctly arranged array', async () => {
      getUsers.mockResolvedValue(fetchedUsers);
      getPosts.mockResolvedValue(fetchedPosts);
      const result = await getUsersWithPosts();
      expect(result).toEqual(usersWithPostsArray);
    });
  });

  it('should throw error when getUsers fails', async () => {
    const usersErrorMessage = 'Failed to fetch users';
    getUsers.mockRejectedValue(new Error(usersErrorMessage));
    await expect(getUsersWithPosts()).rejects.toThrow(usersErrorMessage);
  });

  it('should throw error when getPosts fails', async () => {
    const postsErrorMessage = 'Failed to fetch posts';
    getPosts.mockRejectedValue(new Error(postsErrorMessage));
    await expect(getUsersWithPosts()).rejects.toThrow(postsErrorMessage);
  });
});
