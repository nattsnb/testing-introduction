import { getUsersSortedByName } from './getUsersSortedByName';
import getUsers from './getUsers';

jest.mock('./getUsers', () => ({
  __esModule: true,
  default: jest.fn(),
  POSTS_URL: 'https://google.com',
}));

describe('The getUsersSortedByName function', () => {
  describe('basic behaviour', () => {
    it('should call the getUsers function', async () => {
      getUsers.mockResolvedValue([]);
      await getUsersSortedByName();
      expect(getUsers).toHaveBeenCalled();
    });
  });
  describe('when users array is correctly fetched in getUsers', () => {
    const sortedArray = [
      { id: 2, name: 'Emily Johnson', email: 'emily.johnson@example.com' },
      { id: 1, name: 'John Smith', email: 'john.smith@example.com' },
      {
        id: 3,
        name: 'Michael Williams',
        email: 'michael.williams@example.com',
      },
    ];
    it('should return properly sorted array', async () => {
      getUsers.mockResolvedValue([
        { id: 1, name: 'John Smith', email: 'john.smith@example.com' },
        { id: 2, name: 'Emily Johnson', email: 'emily.johnson@example.com' },
        {
          id: 3,
          name: 'Michael Williams',
          email: 'michael.williams@example.com',
        },
      ]);
      const result = await getUsersSortedByName();
      expect(result).toEqual(sortedArray);
    });
  });
  describe('when users array is incorrectly fetched in getUsers', () => {
    it('should throw new error with correct message', async () => {
      getUsers.mockRejectedValue(new Error('Failed to fetch users.'));
      await expect(getUsersSortedByName()).rejects.toThrow(
        Error('Failed to fetch users.'),
      );
    });
  });
});
