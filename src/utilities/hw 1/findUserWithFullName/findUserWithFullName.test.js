import { findUserWithFullName } from './findUserWithFullName';

describe('The findUserWithFullName function', () => {
  let usersArray;
  beforeEach(() => {
    usersArray = [
      {
        firstName: 'John',
        lastName: 'Smith',
        heightInCm: 184,
      },
      {
        firstName: 'Kate',
        lastName: 'Williams',
        heightInCm: 169,
      },
    ];
  });
  describe('when correct arguments are passed', () => {
    describe('and user with provided surname is in the arrayOfUsers', () => {
      it('should return user', () => {
        const user = {
          firstName: 'Kate',
          lastName: 'Williams',
          heightInCm: 169,
        };
        const result = findUserWithFullName(usersArray, 'Williams');
        expect(result).toEqual(user);
      });
    });
    describe('and user with provided surname is in the arrayOfUsers', () => {
      it('should return empty array', () => {
        const result = findUserWithFullName(usersArray, 'Bush');
        expect(result).toEqual(undefined);
      });
    });
  });

  describe('when array with wrong arguments is passed', () => {
    it('should throw error with correct message', () => {
      expect(() => {
        findUserWithFullName('', 'Williams');
      }).toThrow(Error('Wrong argument.'));
    });
  });
});
