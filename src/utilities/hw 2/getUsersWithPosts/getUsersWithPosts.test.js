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
  describe('basic behaviour', () => {
    it('should call the getUsers function', async () => {
      getUsers.mockResolvedValue([]);
      getPosts.mockResolvedValue([]);
      await getUsersWithPosts();
      expect(getUsers).toHaveBeenCalled();
    });
    it('should call the getPosts function', async () => {
      getUsers.mockResolvedValue([]);
      getPosts.mockResolvedValue([]);
      await getUsersWithPosts();
      expect(getPosts).toHaveBeenCalled();
    });
  });
  describe('when both fetches succeeded', () => {
    const arrangedArray = [
      {
        id: 1,
        name: 'Alice',
        posts: [
          { id: 101, userId: 1, title: 'Post 1' },
          { id: 102, userId: 1, title: 'Post 2' },
        ],
      },
      {
        id: 2,
        name: 'Bob',
        posts: [{ id: 201, userId: 2, title: 'Post 3' }],
      },
    ];
    it('should return correctly arranged array', async () => {
      getUsers.mockResolvedValue([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ]);
      getPosts.mockResolvedValue([
        { id: 101, userId: 1, title: 'Post 1' },
        { id: 102, userId: 1, title: 'Post 2' },
        { id: 201, userId: 2, title: 'Post 3' },
      ]);
      const result = await getUsersWithPosts();
      expect(result).toEqual(arrangedArray);
    });
  });
  describe('when either fetch fails', () => {
    it('should throw error when getUsers fails', async () => {
      getUsers.mockRejectedValue(new Error('Failed to fetch users'));
      getPosts.mockResolvedValue([]);
      await expect(getUsersWithPosts()).rejects.toThrow(
        'Failed to fetch users',
      );
    });

    it('should throw error when getPosts fails', async () => {
      getUsers.mockResolvedValue([]);
      getPosts.mockRejectedValue(new Error('Failed to fetch posts'));
      await expect(getUsersWithPosts()).rejects.toThrow(
        'Failed to fetch posts',
      );
    });
  });
});
