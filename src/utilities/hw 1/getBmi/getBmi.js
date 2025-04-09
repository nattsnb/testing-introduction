// bmi = weight(kg) / height(m)^2

export function getBmi(weightInKg, heightInM) {
  if (typeof weightInKg !== 'number' || typeof heightInM !== 'number') {
    throw new Error('That is not a number.');
  }
  return weightInKg / (heightInM * heightInM);
}
