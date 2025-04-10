export function shouldSetAlarm(isEmployed, isOnVacation) {
  if (typeof isEmployed !== 'boolean' || typeof isOnVacation !== 'boolean') {
    throw new Error('That is not a boolean.');
  }
  if (!isOnVacation && isEmployed) {
    return true;
  } else {
    return false;
  }
}
