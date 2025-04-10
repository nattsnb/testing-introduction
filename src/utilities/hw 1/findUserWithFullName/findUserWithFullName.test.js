import { findUserWithFullName } from './findUserWithFullName';

describe('The findUserWithFullName function', () => {
  let usersArray;
  let kateUser;
  beforeEach(() => {
    kateUser = {
      firstName: 'Kate',
      lastName: 'Williams',
      heightInCm: 169,
    };
    usersArray = [
      {
        firstName: 'John',
        lastName: 'Smith',
        heightInCm: 184,
      },
      kateUser,
    ];
  });
  describe('when correct arguments are passed', () => {
    describe('and user with provided surname is in the arrayOfUsers', () => {
      it('should return user', () => {
        const result = findUserWithFullName(usersArray, 'Williams');
        expect(result).toBe(kateUser);
      });
    });
    describe('and user with provided surname is not in the arrayOfUsers', () => {
      it('should return undefined', () => {
        const result = findUserWithFullName(usersArray, 'Bush');
        expect(result).toBeUndefined();
      });
    });
  });

  describe('when array with wrong arguments is passed', () => {
    it('should throw error with correct message', () => {
      expect(() => {
        findUserWithFullName('', 'Williams');
      }).toThrow(new Error('Wrong argument.'));
    });
  });
});
