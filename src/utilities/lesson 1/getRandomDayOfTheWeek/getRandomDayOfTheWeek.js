export function getDayOfTheWeek(dayNumber) {
  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  return weekdays[dayNumber];
}

export function getRandomDayOfTheWeek() {
  const weekdayNumber = Math.floor(Math.random() * 6);
  return getDayOfTheWeek(weekdayNumber);
}
