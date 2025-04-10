function getRandomNumberInRange(bottomLimit, topLimit) {
  return Math.floor(Math.random() * (topLimit - bottomLimit + 1)) + bottomLimit;
}

export default getRandomNumberInRange;
