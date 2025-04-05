export function findUserWithFullName(arrayOfUsers, userLastName) {
  if (!Array.isArray(arrayOfUsers) || typeof userLastName !== 'string') {
    throw new Error('Wrong argument.');
  }
  const result = arrayOfUsers.find((user) => user.lastName === userLastName);
  return result;
}
